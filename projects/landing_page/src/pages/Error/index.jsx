import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <div className="container-error">
            <h1>404</h1>
            <p>Looks like we can't find this page! Return to the landing page to access resources.</p>
            <Link to='/'>Access landing page</Link>
        </div>
    )
}