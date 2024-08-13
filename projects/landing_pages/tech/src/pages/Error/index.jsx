import { Link } from 'react-router-dom'
import './error.css'

export default function Error(){
    return(
        <div>
            <h1>Error page</h1>
            <Link to='/'>Access landing page</Link>
        </div>
    )
}