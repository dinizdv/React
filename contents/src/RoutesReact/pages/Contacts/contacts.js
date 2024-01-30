import {Link} from 'react-router-dom'

function Contacts () {
    return(
        <div>
            <h1>Contact Page</h1>
            <span>Number: (dd) xxxx-xxxxx</span>
            <br/>
            <Link to="/">Home</Link>
            <br/>   
            <Link to="/about">About</Link>
        </div>
    )
}

export default Contacts