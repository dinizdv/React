import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Admin from '../pages/Admin'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> } /> {/* starts with Home */}
            <Route path='/register' element={ <Register/> } />
            <Route path='/admin' element={ <Admin/> } />
        </Routes>   
    )
}

export default RoutesApp