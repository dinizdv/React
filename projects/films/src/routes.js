import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Film from './pages/Film'

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header /> 
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/film/:id" element={<Film/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp