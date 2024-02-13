import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contacts from './pages/Contacts/contacts';
import Error from './pages/Error/error'
import Products from './pages/Products/products'

function RoutesApp(){
    return(
        <BrowserRouter>
        {/* exporting the <header> for all pages */}
            <Header />  {/* fixed header */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="*" element={<Error/> } />
                <Route path="/products/:id" element={<Products />} />
                {/* :id -> received from the route */}
             </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
