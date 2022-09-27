import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import ProductPage from "./pages/Shop";

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from "./pages/auth/Register";
import AccountPage from './pages/Account';
import OrderPage from './pages/OrderPage';

import LoginRedirect from './pages/redirect/LoginRedirect'
import AccountRedirect from './pages/redirect/AccountRedirect';

import CustomersPage from "./pages/dashboard/customerManagement/CustomersPage";
import DashboardHome from './pages/dashboard/DashboardHome'
import CustomerAddPage from "./pages/dashboard/customerManagement/CustomerAddPage"
import CustomerProfilePage from "./pages/dashboard/customerManagement/CustomerProfile";
import FactoryAddPage from "./pages/dashboard/factory/FactoryAddPage";
import FactoryPage from "./pages/dashboard/factory/FactoryPage";
import FactoryDetailsPage from "./pages/dashboard/factory/FactoryDetails";
import MachineAddPage from "./pages/dashboard/machine/MachineAddPage";
import MachinePage from "./pages/dashboard/machine/MachinePage";
import MachineDetailsPage from "./pages/dashboard/machine/MachineDetails";
import MachineUpdate from "./pages/dashboard/machine/MachineUpdate";
import OrderRequest from "./pages/dashboard/order/OrderRequest";

function App() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product" element={<ProductPage />}/>

                <Route path="/login" element={!localStorage.getItem('user')? <LoginPage />:<Navigate to='/account-redirect'/>}/>
                <Route path="/signup" element={!localStorage.getItem('user')? <RegisterPage />:<Navigate to='/account-redirect'/>}/>
                <Route path="/account" element={localStorage.getItem('user')? <AccountPage />:<Navigate to='/login-redirect'/>}/>
                <Route path="/my-order/:id" element={localStorage.getItem('user')? <OrderPage />:<Navigate to='/login-redirect'/>}/>
                <Route path="/login-redirect" element={<LoginRedirect />}/>
                <Route path="/account-redirect" element={<AccountRedirect />}/>

                
                <Route path="/dashboard" element={<DashboardHome />}/>
                <Route path="/customers" element={<CustomersPage />}/>
                <Route path="/customer/:id" element={<CustomerProfilePage />}/>
                <Route path="/add-customer" element={<CustomerAddPage />}/>
                <Route path="/add-factory" element={<FactoryAddPage />}/>
                <Route path="/view-factory" element={<FactoryPage />}/>
                <Route path="/factory-details/:id" element={<FactoryDetailsPage />}/>
                <Route path="/add-machine" element={<MachineAddPage />}/>
                <Route path="/view-machine" element={<MachinePage />}/>
                <Route path="/machine-details/:id" element={<MachineDetailsPage />}/>
                <Route path="/update-machine" element={<MachineUpdate />}/>
                <Route path="/order-request" element={<OrderRequest />}/>

            </Routes>
        </BrowserRouter>  
    );
}

export default App;
