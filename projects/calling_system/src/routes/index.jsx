import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Customers from "../pages/Customers";
import NewCall from "../pages/NewCall";
import Private from "./Private";
import Error from "../pages/Error"

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <SignIn/> } />
            <Route path="/register" element={ <SignUp/> } />
            <Route path="/dashboard" element={ <Private><Dashboard/></Private> } />
            <Route path="/profile" element={ <Private><Profile/></Private> } />
            <Route path="/customers" element={ <Private><Customers/></Private>} />
            <Route path="/newCall" element={ <Private><NewCall/></Private> } />
            <Route path="*" element={ <Error/> } />
        </Routes>
    )
}

export default RoutesApp