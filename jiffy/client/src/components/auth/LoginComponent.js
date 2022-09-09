import {React, useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const LoginComponent = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push("/");
        }
    }, [history]);

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                "/api/auth/login",
                { email, password },
                config
            );

            localStorage.setItem("authToken", data.token);

            history.push("/");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="ltn__login-area pb-65">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                            <h1 className="section-title">Sign In <br />To  Your Account</h1>
                            {error && <p>{error}</p>}
                            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                Sit aliquid,  Non distinctio vel iste.</p> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="account-login-inner">
                            <form onSubmit={loginHandler} className="ltn__form-box contact-form-box">
                                <input type="text" name="email" placeholder="Email*" 
                                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <input type="password" name="password" placeholder="Password*" 
                                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                <div className="btn-wrapper mt-0">
                                    <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                                </div>
                                <div className="go-to-btn mt-20">
                                    <a href="#"><small>FORGOTTEN YOUR PASSWORD?</small></a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="account-create text-center pt-50">
                            <h4>DON'T HAVE AN ACCOUNT?</h4>
                            <p>Add items to your wishlistget personalised recommendations <br />
                                check out more quickly track your orders register</p>
                            <div className="btn-wrapper">
                                <Link to="/signup"><a href="register.html" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;