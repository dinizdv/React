import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Film from './pages/Film'
import Favorites from './pages/Favorites'
import Error from './pages/Error'

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header /> 
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/film/:id" element={<Film/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="*" element={<Error/>} /> {/* * => page not found */}
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp