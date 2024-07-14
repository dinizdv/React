import { Link } from 'react-router-dom'
import './error.css'

export default function Error(){
    return(
        <div className='containerError'>
            <h1 className='title404'>404</h1>
            <div className="containerSpanError">
                <h2>Page not found!</h2>
                <span>It looks like this page doesn´t exist! Return home to access Calling System features.</span></div>
            <Link to='/dashboard' className='returnHome'><i class="fa-solid fa-house"></i>Return to home</Link>
        </div>
    )
}