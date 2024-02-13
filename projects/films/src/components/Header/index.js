import './style.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className="brand" to="/">Microsoft Flix</Link>
            <Link className="favorites" to="/favorites">my films</Link>
        </header>
    )
}

export default Header