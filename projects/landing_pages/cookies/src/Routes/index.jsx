import { Routes, Route } from 'react-router-dom'
import TraditionalCookie from '../Pages/TraditionalCookie'
import WhiteCookie from '../Pages/WhiteCookie'
import NutellaCookie from '../Pages/NutellaCookie'
import Main from '../Pages/Main'
import Error from '../Pages/Error'

export default function RoutesApp(){
    
    return(
        <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/cookie_tradicional' element={ <TraditionalCookie/> } />
        <Route path='/cookie_nutella' element={ <NutellaCookie/> } />
        <Route path='/cookie_chocolate_branco' element={ <WhiteCookie/> } />
        <Route path='*' element={ <Error/> } />
        </Routes>
    )
}