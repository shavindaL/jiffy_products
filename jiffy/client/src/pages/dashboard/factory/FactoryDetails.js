import React from 'react';

import Header from '../../../components/dashboard/Header';
import FactoryDetails from '../../../components/dashboard/factory/FactoryDetails';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function FactoryDetailsPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <FactoryProfile />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default FactoryDetailsPage;