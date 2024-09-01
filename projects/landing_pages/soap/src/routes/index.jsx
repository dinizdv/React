import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Purchase from '../pages/Purchase'
import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import Private from './Private'
import Transactions from '../pages/Transactions'
import Error from '../pages/Error'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Main/> } />
            <Route path='*' element={ <Error/> } />
            <Route path='/compra' element={ <Purchase/> } />
            <Route path='/admin' element={ <Admin/> } />
            <Route path='/admin/dashboard' element={<Private><Dashboard/></Private>}/>
            <Route path='/admin/dashboard/transactions' element={<Private><Transactions/></Private>}/>
        </Routes>
    )
}