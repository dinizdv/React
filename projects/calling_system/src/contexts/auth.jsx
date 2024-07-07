import { useState, createContext, useEffect } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({}) // {} -> default value

function AuthProvider({ children }){
    const [user, setUser] = useState(null) // data or null (default)
    const [loadingAuth, setLoadingAuth] = useState(false)

    const navigate = useNavigate()

    async function signIn(email, password){
        setLoadingAuth(true)

        await signInWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid
            const docRef = doc(db, "users", uid)
            const docSnap = await getDoc(docRef) // get data

            let data = {
                uid: uid,
                name: docSnap.data().name,
                email: value.user.email,
                avatarUrl: docSnap.data().avatarUrl
            }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast(`👋 Welcome back, ${data.name}!`)
            navigate('/dashboard')
        })
        .catch((error) => {
            console.log(error)
            setLoadingAuth(false)
            toast.error('An error has occurred!')
        })
    }

    // register new user
    async function signUp(email, password, name){
        setLoadingAuth(true)

        await createUserWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid // uid it´s automatic

            await setDoc(doc(db, "users", uid), { // users = collection; into doc = uid
                name: name,
                avatarUrl: null // begins empty
            })
            .then( () => {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                    avatarUrl: null
                }

                setUser(data) // contains user data (!= firebase)
                storageUser(data) // to localStorage
                setLoadingAuth(false)
                navigate('/dashboard')
                toast.success(`Welcome to the system, ${data.name}!`)
            })
        })
        .catch((error) => {
            console.log(error)
            setLoadingAuth(false)
        })
    }

    // localStorage (user data)
    function storageUser(data){
        localStorage.setItem('@details', JSON.stringify(data))
    }

    return(
        <AuthContext.Provider value={
            {
                signed: !!user, // => convert to boolean (true or false)
                user,
                signIn,
                signUp,
                loadingAuth
            }
        }>
            {children} {/* provider for all children */}
        </AuthContext.Provider>
    )
}

export default AuthProvider