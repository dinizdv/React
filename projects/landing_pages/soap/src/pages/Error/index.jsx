import { Link } from "react-router-dom"

export default function Error(){
    return(
        <div>
        <h1>Error page</h1>
        <Link to='/'>Back to home</Link>
        </div>
    )
}