//import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import AccountPage from './pages/Account';
import ProductPage from "./pages/Shop";

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from "./pages/auth/Register";

import LoginRedirect from './pages/redirect/LoginRedirect'
import AccountRedirect from './pages/redirect/AccountRedirect';

import CustomersPage from "./pages/dashboard/customerManagement/CustomersPage";
import DashboardHome from './pages/dashboard/DashboardHome'
import CustomerAddPage from "./pages/dashboard/customerManagement/CustomerAddPage"
import CustomerProfilePage from "./pages/dashboard/customerManagement/CustomerProfile";

function App() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product" element={<ProductPage />}/>

                <Route path="/login" element={!localStorage.getItem('user')? <LoginPage />:<Navigate to='/account-redirect'/>}/>
                <Route path="/signup" element={!localStorage.getItem('user')? <RegisterPage />:<Navigate to='/account-redirect'/>}/>
                <Route path="/account" element={localStorage.getItem('user')? <AccountPage />:<Navigate to='/login-redirect'/>}/>
                <Route path="/login-redirect" element={<LoginRedirect />}/>
                <Route path="/account-redirect" element={<AccountRedirect />}/>

                
                <Route path="/dashboard" element={<DashboardHome />}/>
                <Route path="/customers" element={<CustomersPage />}/>
                <Route path="/customer/:id" element={<CustomerProfilePage />}/>
                <Route path="/add-customer" element={<CustomerAddPage />}/>
            </Routes>
        </BrowserRouter>  
    );
}

export default App;
