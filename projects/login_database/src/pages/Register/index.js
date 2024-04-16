import { useState } from 'react'
import '../Home/home.css'
import '../../index.css'

import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Register(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleRegister(e){
        e.preventDefault(); /* does not refresh the page */
        if (email !== '' && password !== ''){
            await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/admin', { replace: true })
            }).catch((error) => {
                console.log(error)
            })
        } else {
            alert('Fill in the blank fields!')
        }
    }


    return (
        <div className="home-container">
            <h1>Register</h1>
            <span>Manage your schedule easily.</span>
        <form className="form" onSubmit={handleRegister}>
            <input type="text" placeholder="your email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
            
            <input type="password" placeholder="your password..." value={password} onChange={(e) => setPassword(e.target.value)} />
        
            <button type="submit">Register</button>
        </form>

        <Link className="button-link" to="/">
            Already have an account? Sign in!
        </Link>

        </div>
    )
}