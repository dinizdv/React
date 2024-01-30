import {Link} from 'react-router-dom'

function About () {
    return(
        <div>
            <h1>About</h1>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/contacts">Contacts</Link>
        </div>
    )
}

export default About