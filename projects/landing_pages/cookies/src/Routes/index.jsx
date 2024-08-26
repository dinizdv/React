import { Routes, Route } from 'react-router-dom'
import Main from '../Pages/Main'

export default function RoutesApp(){
    
    return(
        <Routes>
        <Route path='/' element={ <Main/> } />
        </Routes>
    )
}