import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> } /> {/* starts with Home */}
            <Route path='/register' element={ <Register/> } />
        </Routes>   
    )
}

export default RoutesApp