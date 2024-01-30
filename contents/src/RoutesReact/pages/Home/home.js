import {Link} from 'react-router-dom'
// Link -> not refresh

function Home () {
    return(
        <div>
            <h1>Welcome to the home</h1>
            <Link to="/about">About</Link> 
            <br/>
            <Link to="/contacts">Contacts</Link>
            {/* where do you want to go */}
        </div>
    )
}

export default Home