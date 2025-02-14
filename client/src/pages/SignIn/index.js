import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom"; // Corrected Link import
import Logo from '../../assets/images/header-logo.jpg';
import Button from '@mui/material/Button';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Corrected icon import
import { FaInstagram } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import GoogleImg from '../../assets/images/img20.png'
import React from "react";

const SignIn = () => {
    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    }, [context]);

    return (
        <>
            <section className="section signInPage">
                <div className="shape-bottom">
                    {/* SVG is commented out, keep it if you need it */}
                </div>
                <div className="container">
                    <div className="box card p-3 shadow border-0">
                        <div className="text-center">
                            <img src={Logo} alt="Logo" /> {/* Added alt for accessibility */}
                        </div>

                        <form className="mt-3">
                            <h2 className="mb-3">Sign In</h2>
                            <div className="form-group">
                                <TextField
                                    id="standard"
                                    label="Username"
                                    variant="standard"
                                    required
                                    className="w-100"
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    id="standard-basic"
                                    label="Password"
                                    type="password"
                                    required
                                    variant="standard"
                                    className="w-100"
                                />
                            </div>
                            <Link to="/forgot-password" className="border-effect">Forgot Password?</Link> {/* Fixed Forgot Password link */}
                            <div className="d-flex align-items-center mt-3 mb-3  ">
                            <Button className="btn-blue btn-lg  col btn-big">Sign In</Button>
                            <Link to="/"><Button className="btn-lg btn-big col ml-3" variant="outlined" onClick= {()=> context.setisHeaderFooterShow(true)}>cancel</Button></Link>
                            </div>
                            <p className="txt">
                                Not Registered? <Link to="/signUp" className="border-effect">Sign Up</Link>
                            </p>
                            <h6 className="mt-4 text-center font-weight-bold">or continue with a social account</h6>

                            <span className="cursor">
                                <img src={GoogleImg} className="w-100" />
                            </span>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;
