import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Error from '../pages/Error'

export default function RoutesApp(){
    return(
    <Routes>
        <Route path='/' element={ <Main />} />
        <Route path='*' element={ <Error /> } />
    </Routes>
    )
}