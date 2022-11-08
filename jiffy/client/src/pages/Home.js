import React from 'react';
import { useEffect, useState } from 'react'

import Header from '../components/HeaderHome';
import CartMenu from '../components/CartMenu';
import MobileMenu from '../components/MobileMenu';
import MainSlider from '../components/MainSlider';
import ProductTab from '../components/ProductTab';
import Footer from '../components/Footer';
import FeedbackComponent from '../components/dashboard/FeedbackComponent';

function Home() {
    return (
        <div>
            <Header />
            <MainSlider />
            <br /><br /><br /><br /><br />


            <div class="ltn__about-us-area pt-120--- pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                            <div class="about-us-img-wrap about-img-left">
                                <img src={process.env.PUBLIC_URL + "/assets/img/others/6.jpg"} alt="About Us Image" />
                            </div>
                        </div>
                        <div class="col-lg-6 align-self-center">
                            <div class="about-us-info-wrap">
                                <div class="section-title-area ltn__section-title-2">
                                    <h6 class="section-subtitle ltn__secondary-color">Jiffy SL (PVT) LTD</h6>
                                    <h1 class="section-title">Developing sustainable plant growing solutions together <br class="d-none d-md-block" /></h1>
                                    <p>Jiffy growing solutions help innovative and leading companies in global horticulture with sustainable plant growing solutions to feed and beautify the world. Jiffy Products include pots, pellets, coir products, substrates and plugs. We always have the best growing solution for your crop, process and business size.

                                        By listening carefully and by sharing our knowledge, we help you to improve sustainability,
                                        efficiency and product quality. Together we aim for more yield and less waste.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ltn__feature-area section-bg-1 pt-115 pb-90">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-area ltn__section-title-2 text-center">
                                <h6 class="section-subtitle ltn__secondary-color">//  features  //</h6>
                                <h1 class="section-title">Why Choose Us<span>.</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-7">
                                <div class="ltn__feature-icon-title">
                                    <div class="ltn__feature-icon">
                                        {/* <span><img src="img/icons/icon-img/21.png" alt="#" /></span> */}
                                    </div>
                                    <h3><a href="service-details.html">All Kind Brand</a></h3>
                                </div>
                                <div class="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-7">
                                <div class="ltn__feature-icon-title">
                                    <div class="ltn__feature-icon">
                                        {/* <span><img src="img/icons/icon-img/22.png" alt="#" /></span> */}
                                    </div>
                                    <h3><a href="service-details.html">Curated Products</a></h3>
                                </div>
                                <div class="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="ltn__feature-item ltn__feature-item-7">
                                <div class="ltn__feature-icon-title">
                                    <div class="ltn__feature-icon">
                                        {/* <span><img src="img/icons/icon-img/23.png" alt="#" /></span> */}
                                    </div>
                                    <h3><a href="service-details.html">Pesticide Free Goods</a></h3>
                                </div>
                                <div class="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <ProductTab /> */}
            <FeedbackComponent/>
            

            <div className="ltn__utilize-overlay"></div>

            {/* <div class="ltn__feature-area before-bg-bottom-2 mb--30--- plr--5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ltn__feature-item-box-wrap ltn__border-between-column white-bg">
                                <div class="row">
                                    <div class="col-xl-3 col-md-6 col-12">
                                        <div class="ltn__feature-item ltn__feature-item-8">
                                            <div class="ltn__feature-icon">
                                                <img src="img/icons/icon-img/11.png" alt="#" />
                                            </div>
                                            <div class="ltn__feature-info">
                                                <h4>Curated Products</h4>
                                                <p>Provide Curated Products for
                                                    all product over $100</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6 col-12">
                                        <div class="ltn__feature-item ltn__feature-item-8">
                                            <div class="ltn__feature-icon">
                                                <img src="img/icons/icon-img/12.png" alt="#" />
                                            </div>
                                            <div class="ltn__feature-info">
                                                <h4>Handmade</h4>
                                                <p>We ensure the product quality
                                                    that is our main goal</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6 col-12">
                                        <div class="ltn__feature-item ltn__feature-item-8">
                                            <div class="ltn__feature-icon">
                                                <img src="img/icons/icon-img/13.png" alt="#" />
                                            </div>
                                            <div class="ltn__feature-info">
                                                <h4>Natural Food</h4>
                                                <p>Return product within 3 days
                                                    for any product you buy</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6 col-12">
                                        <div class="ltn__feature-item ltn__feature-item-8">
                                            <div class="ltn__feature-icon">
                                                <img src="img/icons/icon-img/14.png" alt="#" />
                                            </div>
                                            <div class="ltn__feature-info">
                                                <h4>Free home delivery</h4>
                                                <p>We ensure the product quality
                                                    that you can trust easily</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer />
        </div>
    );
}

export default Home;