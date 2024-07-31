import { Routes, Route } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Draw from '../Pages/Draw'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <SignIn/> } />
            <Route path='/register' element={ <SignUp/> } />
            <Route path='/register/draw' element={ <Draw/> } />
        </Routes>
    )
}