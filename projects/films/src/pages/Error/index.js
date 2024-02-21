import {Link} from 'react-router-dom'

function Error (){
    return(
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            {/* needs capitalize! and styling */}
            <Link to="/">See all films</Link>
        </div>
    )
}

export default Error