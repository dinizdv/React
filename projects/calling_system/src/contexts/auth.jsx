import { useState, createContext, useEffect } from 'react'

export const AuthContext = createContext({}) // {} -> default value

function AuthProvider({ children }){
    const [user, setUser] = useState(null) // data or null (default)

    function signIn(email, password){
        console.log(email)
        console.log(password)
        alert('logged with success')
    }

    return(
        <AuthContext.Provider value={
            {
                signed: !!user, // => convert to boolean (true or false)
                user,
                signIn
            }
        }>
            {children} // provider for all children
        </AuthContext.Provider>
    )
}

export default AuthProvider