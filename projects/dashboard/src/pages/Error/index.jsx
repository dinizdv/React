import './error.css'
import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <div className='container-error'>
            <div className="container-styled-error">
                <h1>page not found - 404</h1>
                <div className="container-logo-error">
                    <i class="fa-solid fa-coins" />
                    <a href="">Finance Tech</a>
                </div>
                <p>Looks like we can't find this page! Return to the dashbaoard to access resources.</p>
                <div className="container-link-home">
                    <Link to='/'>Back home</Link>
                </div>
            </div>
        </div>
    )
}