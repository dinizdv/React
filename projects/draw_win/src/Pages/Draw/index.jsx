import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'
import { Link } from 'react-router-dom'
import './draw.css'

export default function Draw(){
    const [currentResult, setCurrentResult] = useState([])
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(0) // to firebase
    const { user, registerTotal } = useContext(AuthContext)
    console.log(user)

    async function generateDraw(){
        setCount(count + 1)
        const min = 1
        const max = 1000
        const value = Math.floor(Math.random() * (max - min + 1)) + min
        setCurrentResult([...currentResult, value]) // add new value to currentResults; update
        setTotal(prevTotal => prevTotal + value)
        await updateDoc(doc(db, 'users', user.uid), {
            total: total + value
        })

        // registerTotal(user.uid, total)
        toast(`Sorteio ${count}: ${value}`)
        return value
    }

    return(
        <div className='container-draw'>
            <div className="container-elements">
                <h1>Participe do sorteio!</h1>
                {count < 4 ? 
                <>
                <p className='description'>Você pode clicar 3 vezes no botão. Cada clique sorteia um número. Ao final, exibiremos a soma dos seus três números sorteados!</p>
                <div className="container-btn-draw"><button type='submit' className='btn-draw' onClick={generateDraw}>Sortear número 😎</button></div>
                </>
                :
        
                <div>
                    <p className='finish'>Sorteio finalizado!</p>
                </div>
                }
                <div className="container-results">
                    {currentResult.map((result, index) => {
                            return <p key={index} className='results'>Sorteio {index + 1}: {result}</p> // return = mandatory
                        })}
                </div>

                        <div className="container-btn-classification">
                <Link to='/draw/results' className='btn-link'>Ver ranking</Link>
            </div>    
                <p className='total'>Pontuação total: <b>{total}</b></p>
            
            </div>
        </div>
    )
}