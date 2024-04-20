import { useState, useEffect } from 'react'
import { auth } from '../firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth' // logged user?
import { Navigate } from 'react-router-dom'

export default function Private ({ children }){
    // children -> components as data
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)
    
    useEffect(() => {
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user) => {
                // onAuth -> auth state: logout / login
                if (user){
                    const userData = {
                        uid: user.uid, 
                        email: user.email,
                    }

                    // localStorage.setItem("@detailUser", JSON.stringify(userData))
                    setLoading(false)
                    setSigned(true) // logged in

                } else {
                    setLoading(false)
                    setSigned(false)
                }
            })
        }
        checkLogin()
    }, [])

    if (loading){
        return(
            <div>
                
            </div>
        )
    }

    if (!signed){
        return <Navigate to="/"/>
    }

    return children
}