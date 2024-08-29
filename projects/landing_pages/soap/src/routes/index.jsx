import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Purchase from '../pages/Purchase'
import Error from '../pages/Error'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Main/> } />
            <Route path='*' element={ <Error/> } />
            <Route path='/compra' element={ <Purchase/> } />
        </Routes>
    )
}