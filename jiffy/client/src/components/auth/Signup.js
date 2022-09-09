import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
    return(
    <div className="ltn__login-area pb-110">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area text-center">
                        <h1 className="section-title">Register <br />Your Account</h1>
                        {/* {error && <p>{error}</p>} */}
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                             Sit aliquid,  Non distinctio vel iste.</p> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="account-login-inner">
                        {/* <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box">
                            <input type="email" name="email" placeholder="Email*" 
                            value={values.email} onChange={handleChange('email')}/>
                            <input type="password" name="password" placeholder="Password*" 
                            value={values.password} onChange={handleChange('password')}/>
                            <input type="password" name="confirmpassword" placeholder="Confirm Password*" 
                            value={value.repeatPassword} onChange={handleChange('repeatPassword')}/>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="" />
                                I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="" />
                                By clicking "create account", I consent to the privacy policy.
                            </label>
                            <div className="btn-wrapper">
                                <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                            </div>
                        </form> */}
                        <div className="by-agree text-center">
                            <p>By creating an account, you agree to our:</p>
                            <p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
                            <div className="go-to-btn mt-50">
                                {/* <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a> */}
                                <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Signup;