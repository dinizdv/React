import { useState, createContext, useEffect } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({}) // {} => default value

function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(0)
    const navigate = useNavigate()

    // localStorage
    useEffect(() => {
        async function loadUser(){
            const storageUser = localStorage.getItem('@draw')

            if (storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }
        loadUser()
    }, [])

    // register new user
    async function signUp(email, password, name){
        setLoadingAuth(true)

        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
            let uid = value.user.uid // uid it´s automatic

            await setDoc(doc(db, 'users', uid), {
                name: name,
                id: uid
            })
            .then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                }
                
            storageUser(data) // to localStorage
            setUser(data)
            setLoadingAuth(false)
            toast(`👋 Seja bem-vindo(a) ao sorteio, ${data.name}!`)
            navigate('/register/draw')
            })
        })
        .catch((error) => {
            setLoadingAuth(false)
            toast.error(`Ops, ocorreu um erro! ${error}`)
        })
    }   

    function storageUser(data){
        localStorage.setItem('@draw', JSON.stringify(data)) // ls stores strings only
    }

// new total with updateDoc
async function registerTotal(total){
    try {
        await updateDoc(doc(db, 'users', user.uid), {
            total: total
        });
        console.log("Total registrado com sucesso!");
    } catch (error) {
        console.error("Erro ao registrar total:", error);
    }
}

    return (
        <AuthContext.Provider value={
            {
                signed: !!user,
                user,
                loadingAuth,
                loading,
                setUser,
                signUp,
                storageUser,
                registerTotal
            }
        }>
            {children}    {/* provider for all children */}
        </AuthContext.Provider>
    )
}

export default AuthProvider