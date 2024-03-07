import {Link} from 'react-router-dom'
import './error.css'

function Error (){
    return(
        <div className="container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/" classdName="seeAll">See all films</Link>
        </div>
    )
}

export default Error