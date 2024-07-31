import { useState, createContext, useEffect } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({}) // {} => default value

function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // register new user
    async function signUp(email, password, name){
        setLoadingAuth(true)

        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
            let uid = value.user.id // uid it´s automatic

            await setDoc(doc(db, 'users', uid), {
                name: name
            })
            .then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                }
                
                
            setUser(data)
            setLoadingAuth(false)
            toast(`👋 Seja bem-vindo(a) ao sorteio, ${data.name}!`)
            navigate('/sorteio')
            })
        })
        .catch((error) => {
            setLoadingAuth(false)
            toast.error(`Ops, ocorreu um erro! ${error}`)
        })
    }   

    return (
        <AuthContext.Provider value={
            {
                signed: !!user,
                signUp
            }
        }>
            {children}    {/* provider for all children */}
        </AuthContext.Provider>
    )
}

export default AuthProvider