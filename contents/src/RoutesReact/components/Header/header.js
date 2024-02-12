import {Link} from 'react-router-dom'
import './style.css'

function Header(){
    return(
        <header>
            <h2>Diniz</h2>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">Aboout</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
        </header>
    )
}

export default Header 