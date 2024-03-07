import './header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className="brand" to="/">SetFlix</Link>
            <Link className="favorites" to="/favorites">My Favorite Films</Link>
        </header>
    )
}

export default Header
