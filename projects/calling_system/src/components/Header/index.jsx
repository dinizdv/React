import { useContext } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import userAvatar from '../../assets/userAvatar.png'

export default function Header(){
    const { user } = useContext(AuthContext)
    
    return(
        <div>
            <div className="sidebar">
                <div className='container-userAvatar'>
                    <img className="userAvatar" src={user.avatarUrl === null ? userAvatar : user.avatarUrl} alt="User photo" />
                </div>

                <Link to='/dashboard'>
                    <i className="icons-sidebar fa-solid fa-house"></i>calls
                </Link>
                <Link to='/customers'>
                    <i className="icons-sidebar fa-solid fa-users"></i>clients
                </Link>
                <Link to='/profile'>
                    <i className="icons-sidebar fa-solid fa-gear"></i>profile
                </Link>
                <div className="hr-mobile"></div>
            </div>
        </div>
    )
}