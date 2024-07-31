import { Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import Draw from '../Pages/Draw'
import Results from '../Pages/Results'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <SignUp/> } />
            <Route path='/draw' element={ <Draw/> } />
            <Route path='/draw/results' element={ <Results/> } />
        </Routes>
    )
}