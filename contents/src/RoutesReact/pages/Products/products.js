import {useParams} from 'react-router-dom'
// to access the parameters in the URL of the current route

function Products() {

    // getting the id of the route that was passed
    const {id} = useParams()

    return(
        <div>
            <h2>Product Details:</h2>
            <span>My product is {id}</span>
        </div>
    )
}

export default Products