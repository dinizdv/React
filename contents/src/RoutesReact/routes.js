import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/home'
import About from './pages/About/about'
import Contacts from './pages/Contacts/contacts'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes> 
                {/* Route -> individual route; element = what will be rendered */}
                <Route path="/" element={<Home/>} /> 
                <Route path="/about" element={<About/>} />
                <Route path="/contacts" element={<Contacts/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp