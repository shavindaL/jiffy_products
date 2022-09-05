//import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/Account';

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
                <Route path="/account" element={<AccountPage />}/>
                {/* <Route path="/register" element={<Register />}/> */}
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
