import { Routes, Route } from 'react-router-dom'
import TraditionalGrape from '../Pages/TraditionalGrape'
import Main from '../Pages/Main'
import Error from '../Pages/Error'

export default function RoutesApp(){
    
    return(
        <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/surpresa-de-uva' element={ <TraditionalGrape/> } />
        <Route path='*' element={ <Error/> } />
        </Routes>
    )
}