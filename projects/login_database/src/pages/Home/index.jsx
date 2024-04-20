import { useState } from 'react'
import './home.css'
import '../../index.css'

import { Link } from 'react-router-dom'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Home(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate() // indirect navigation

    async function handleLogin(e){
        e.preventDefault(); /* does not refresh the page */
        if (email !== '' && password !== ''){
            await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/admin', {replace: true})
            }) .catch ((error) => {
                console.log(error)
            })

        } else {
            alert('Fill in the blank fields!')
        }
    }


    return (
        <div className="home-container">
            <h1>To-do List</h1>
            <span>Manage your schedule easily.</span>
        <form className="form" onSubmit={handleLogin}>
            <input type="text" placeholder="your email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
            
            <input type="password" placeholder="your password..." value={password} onChange={(e) => setPassword(e.target.value)} />
        
            <button type="submit">Access</button>
        </form>

        <Link className="button-link" to="/register">
            Don´t have an account? Sign up!
        </Link>

        </div>
    )
}