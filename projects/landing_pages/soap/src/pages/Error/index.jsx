import { Link } from "react-router-dom"
import './error.css'

export default function Error(){
    return(
        <div className="container-error">
        <div className="container-elements">
        <h1>404</h1>
            <p>Looks like we can't find this page! Return to the landing page to access resources.</p>
            <div className="container-back">
            <Link to='/' className="back">Access landing page</Link>
            </div>
        </div>
        </div>
    )
}