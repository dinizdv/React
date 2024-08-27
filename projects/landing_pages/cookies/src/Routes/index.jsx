import { Routes, Route } from 'react-router-dom'
import TraditionalCookie from '../Pages/TraditionalCookie'
import Main from '../Pages/Main'

export default function RoutesApp(){
    
    return(
        <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/cookie_tradicional' element={ <TraditionalCookie/> } />
        </Routes>
    )
}