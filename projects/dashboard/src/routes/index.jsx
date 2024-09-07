import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Error from '../pages/Error'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Dashboard/> } />
            <Route path='*' element={ <Error/> } />
        </Routes>
    )
}