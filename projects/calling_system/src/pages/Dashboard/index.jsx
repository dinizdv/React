import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import Header from "../../components/Header"
import './dashboard.css'

export default function Dashboard(){
    const { logout } = useContext(AuthContext)

    async function handleLogout(){
        await logout()
    }

    return(
        <div>
            <Header/>
            <h1>Dashboard page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}