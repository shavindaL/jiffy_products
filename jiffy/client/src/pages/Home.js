import React from 'react';

import Header from '../components/HeaderHome';
import CartMenu from '../components/CartMenu';
import MobileMenu from '../components/MobileMenu';
import MainSlider from '../components/MainSlider';
import ProductTab from '../components/ProductTab';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <CartMenu />
            <MobileMenu />
            <div class="ltn__utilize-overlay"></div>
            <MainSlider />
            <ProductTab />
            <Footer />
        </div>
    );   
}

export default Home;