//import './App.css';
import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import { useAuthContext } from "./hooks/useAuthContext"

import Home from './pages/Home';
import AccountPage from './pages/Account';
import ProductPage from "./pages/Shop";

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from "./pages/auth/Register";
import CustomersPage from "./pages/dashboard/customerManagement/CustomersPage";
import DashboardHome from './pages/dashboard/DashboardHome'
import CustomerAddPage from "./pages/dashboard/customerManagement/CustomerAddPage"
import CustomerProfilePage from "./pages/dashboard/customerManagement/CustomerProfile";

function App() {
    const reload = () => window.location.reload();

    const { user } = useAuthContext()
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<RegisterPage />}/>
                <Route path="/account" element={<AccountPage />}/>
                <Route path="/product" element={<ProductPage />}/>
                {/* <Route path="/dashboard" element={user? <DashboardHome />:<Navigate to='/login'/>}/> */}
                <Route path="/dashboard" element={<DashboardHome />}/>

                <Route path="/customers" element={<CustomersPage />}/>
                <Route path="/customer/:id" element={<CustomerProfilePage />}/>
                <Route path="/add-customer" element={<CustomerAddPage />}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
