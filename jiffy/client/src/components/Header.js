import React from 'react';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Header() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }

    return (
        <header class="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-2">

            <div class="ltn__header-top-area d-none">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="ltn__top-bar-menu">
                                <ul>
                                    <li><a href="locations.html"><i class="icon-placeholder"></i> 15/A, Nest Tower, NYC</a></li>
                                    <li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i class="icon-mail"></i> info@webmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="top-bar-right text-right">
                                <div class="ltn__top-bar-menu">
                                    <ul>
                                        <li>

                                            <div class="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                                <ul>
                                                    <li><a href="#" class="dropdown-toggle"><span class="active-currency">English</span></a>
                                                        <ul>
                                                            <li><a href="#">Arabic</a></li>
                                                            <li><a href="#">Bengali</a></li>
                                                            <li><a href="#">Chinese</a></li>
                                                            <li><a href="#">English</a></li>
                                                            <li><a href="#">French</a></li>
                                                            <li><a href="#">Hindi</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="ltn__social-media">
                                                <ul>
                                                    <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>

                                                    <li><a href="#" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a href="#" title="Dribbble"><i class="fab fa-dribbble"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black plr--9---">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="site-logo-wrap">
                                <div class="site-logo">
                                    <a href="index.html"><img src={process.env.PUBLIC_URL + "/assets/img/logo-2.png"} alt="Logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col header-menu-column menu-color-white">
                            <div class="header-menu d-none d-xl-block">
                                <nav>
                                    <div class="ltn__main-menu">
                                        <ul>
                                            <li class="menu-icon"><a href="#">Home</a>
                                                <ul class="sub-menu menu-pages-img-show ltn__sub-menu-col-2---">
                                                    <li>
                                                        <a href="index.html">Home Style 01</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-1.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">Home Style 02</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-2.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">Home Style 03</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-3.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">Home Style 04</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-4.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-5.html">Home Style 05 <span class="menu-item-badge">video</span></a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-5.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-6.html">Home Style 06</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-6.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-7.html">Home Style 07</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-7.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-8.html">Home Style 08</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-8.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-9.html">Home Style 09</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-9.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-10.html">Home Style 10</a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-10.jpg"} alt="#" />
                                                    </li>
                                                    <li>
                                                        <a href="index-11.html">Home Style 11 <span class="menu-item-badge">Service</span></a>
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/home-demos/home-11.jpg"} alt="#" />
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-icon"><a href="#">About</a>
                                                <ul>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="service.html">Services</a></li>
                                                    <li><a href="service-details.html">Service Details</a></li>
                                                    <li><a href="portfolio.html">Gallery</a></li>
                                                    <li><a href="portfolio-2.html">Gallery - 02</a></li>
                                                    <li><a href="portfolio-details.html">Gallery Details</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="locations.html">Google Map Locations</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-icon"><a href="#">Shop</a>
                                                <ul>
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                                    <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                                    <li><a href="product-details.html">Shop details </a></li>
                                                    <li><a href="product-details-no-sidebar.html">Shop details no sidebar </a></li>
                                                    <li><a href="#">Other Pages <span class="float-right"></span></a>
                                                        <ul>
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="order-tracking.html">Order Tracking</a></li>
                                                            <li><a href="account.html">My Account</a></li>
                                                            <li><a href="login.html">Sign in</a></li>
                                                            <li><a href="register.html">Register</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-icon"><a href="#">News</a>
                                                <ul>
                                                    <li><a href="blog.html">News</a></li>
                                                    <li><a href="blog-grid.html">News Grid</a></li>
                                                    <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                                                    <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                                                    <li><a href="blog-details.html">News details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-icon"><a href="#">Pages</a>
                                                <ul class="mega-menu">
                                                    <li><a href="#">Inner Pages</a>
                                                        <ul>
                                                            <li><a href="portfolio.html">Gallery</a></li>
                                                            <li><a href="portfolio-2.html">Gallery - 02</a></li>
                                                            <li><a href="portfolio-details.html">Gallery Details</a></li>
                                                            <li><a href="team.html">Team</a></li>
                                                            <li><a href="team-details.html">Team Details</a></li>
                                                            <li><a href="faq.html">FAQ</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Inner Pages</a>
                                                        <ul>
                                                            <li><a href="history.html">History</a></li>
                                                            <li><a href="contact.html">Appointment</a></li>
                                                            <li><a href="locations.html">Google Map Locations</a></li>
                                                            <li><a href="404.html">404</a></li>
                                                            <li><a href="contact.html">Contact</a></li>
                                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Shop Pages</a>
                                                        <ul>
                                                            <li><a href="shop.html">Shop</a></li>
                                                            <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                                            <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                                            <li><a href="shop-grid.html">Shop Grid</a></li>
                                                            <li><a href="product-details.html">Shop details </a></li>
                                                            <li><a href="cart.html">Cart</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="shop.html"><img src={process.env.PUBLIC_URL + "/assets/img/banner/menu-banner-1.png"} alt="#" /></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li class="special-link"><a href="contact.html">GET A QUOTE</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="ltn__header-options ltn__header-options-2">
                            <div class="header-search-wrap">
                                <div class="header-search-1">
                                    <div class="search-icon">
                                        <i class="icon-search for-search-show"></i>
                                        <i class="icon-cancel  for-search-close"></i>
                                    </div>
                                </div>
                                <div class="header-search-1-form">
                                    <form id="#" method="get" action="#">
                                        <input type="text" name="search" value="" placeholder="Search here..." />
                                        <button type="submit">
                                            <span><i class="icon-search"></i></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="ltn__drop-menu user-menu">
                                <ul>
                                    <li>
                                        <a href="#"><i class="icon-user"></i></a>
                                        <ul>
                                            {!user && (
                                                <>
                                                    <li><a>Sign in</a>
                                                    </li><li><a>Register</a></li>
                                                    <li><a>My Account</a></li>
                                                </>
                                            )}
                                            {user && (
                                                <>
                                                    <li><a href="wishlist.html">{user.email}</a></li>
                                                    <li onClick={handleClick}><a>Log out</a></li>
                                                </>
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="mini-cart-icon">
                                <a href="#ltn__utilize-cart-menu" class="ltn__utilize-toggle">
                                    <i class="icon-shopping-cart"></i>
                                    <sup>2</sup>
                                </a>
                            </div>
                            <div class="mobile-menu-toggle d-xl-none">
                                <a href="#ltn__utilize-mobile-menu" class="ltn__utilize-toggle">
                                    <svg viewBox="0 0 800 600">
                                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                        <path d="M300,320 L540,320" id="middle"></path>
                                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;