//import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import AccountPage from './pages/Account';
import ProductPage from "./pages/Shop";

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from "./pages/auth/Register";
import CustomersPage from "./pages/admin/Customers";

// import './img/favicon.png';
// import './css/font-icons.css';
// import './css/plugins.css';
// import './css/style.css';
// import './css/responsive.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<RegisterPage />}/>
                <Route path="/account" element={<AccountPage />}/>
                <Route path="/product" element={<ProductPage />}/>
                <Route path="/customers" element={<CustomersPage />}/>
                {/* <Route path="/register" element={<Register />}/> */}
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
