import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import PurchaseHeart from '../pages/PurchaseHeart'
import PurchaseFlower from '../pages/PurchaseFlower'
import PurchaseSquare from '../pages/PurchaseSquare'
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
            <Route path='/compra-sabonete-de-coracao' element={ <PurchaseHeart/> } />
            <Route path='/compra-sabonete-de-flor' element={ <PurchaseFlower/> } />
            <Route path='/compra-sabonete-quadrado' element={ <PurchaseSquare/> } />
            <Route path='/admin' element={ <Admin/> } />
            <Route path='/admin/dashboard' element={<Private><Dashboard/></Private>}/>
            <Route path='/admin/dashboard/transactions' element={<Private><Transactions/></Private>}/>
        </Routes>
    )
}