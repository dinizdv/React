import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { db } from '../../services/firebaseConnection'
import { collection, getDoc, getDocs, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Header from '../../components/Header'
import Title from '../../components/Title'
import './newCall.css'

const listRef = collection(db, 'customers')

export default function NewCall(){
    const { user } = useContext(AuthContext)

    const [customers, setCustomers] = useState([])
    const [loadCustomer, setLoadCustomer] = useState(true)
    const [customerSelected, setCustomerSelected] = useState(0)
    const [complement, setComplement] = useState('')
    const [subject, setSubject] = useState('Support')
    const [status, setStatus] = useState('Opened')

    useEffect(() => {
        async function loadCustomers(){
            const querySnapshot = await getDocs(listRef) // all docs (customers collection)
            .then((snapshot) => {
                let list = []
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        companyName: doc.data().companyName
                    })
                })

                if (snapshot.docs.size === 0){
                    toast.error('No companies found')
                    setLoadCustomer(false)
                    return
                }

                setCustomers(list)
                setLoadCustomer(false)
            })  
            .catch((error) => {
                toast.error('Error ', error)
                setLoadCustomer(false)
            })
        }

        loadCustomers()
    }, [])

    function handleOptionChange(e){
        setStatus(e.target.value)
    }

    function handleChangeSelect(e){
        setSubject(e.target.value)
        console.log(e.target.value)
    }

    function handleChangeCustomer(e){
        setCustomerSelected(e.target.value)
        console.log(customers[e.target.value].companyName)
    }

    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="New call">
                    <i class="fa-solid fa-plus"></i>
                </Title>

                <div className="container-profile">
                    <form className="form-profile">
                        <label>Clients</label>
                        {
                            loadCustomer ? (
                                <input type="text" disabled='true' value={'Loading...'} />
                            ) : (
                                <select value={customerSelected} onChange={handleChangeCustomer}>
                                    {customers.map((client, index) => {
                                        return(
                                            <option key={index} value={index}>
                                                {client.companyName}
                                            </option>
                                        )
                                    })}
                                </select>
                            )
                        }

                        <label>Subject</label>
                        <select value={subject} className="select-form" onChange={handleChangeSelect}>
                            <option value='Support'>Support</option>
                            <option value='Finance'>Finance</option>
                            <option value='Technical visit'>Technical visit</option>
                        </select>   

                        <label>Status</label>
                        <div className="status">
                            <input type="radio" name="radio" value='Opened' 
                            onChange={handleOptionChange}
                            check={ status === 'Opened' }
                            />
                            <span>Opened</span>

                            <input type="radio" name="radio" value='Progress' 
                            onChange={handleOptionChange}
                            check={ status === 'Progress' }
                            />
                            <span>In progress</span>

                            <input type="radio" name="radio" value='Served' 
                            onChange={handleOptionChange}
                            check={ status === 'Served' }
                            />
                            <span>Served</span>
                        </div>

                        <label htmlFor="">Complement</label>
                        <textarea name="" id="" placeholder='Describes your problem (optional).'
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                        />

                        <button type="submit" className='btn-save'>Register</button>
                        </form>
                </div>
            </div>
        </div>
    )
}