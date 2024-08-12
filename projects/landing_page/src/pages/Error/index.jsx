import { Link } from 'react-router-dom'
import './error.css'

export default function Error(){
    return(
        <div className='bg'>
        <div className="container-error">
            <div className="container-elements">
            <h1>404</h1>
            <div className="container-p-and-link">
            <p>Looks like we can't find this page! Return to the landing page to access resources.</p>
            <Link to='/'>Access landing page</Link>
            </div>
            </div>
        </div>
        </div>
    )
}