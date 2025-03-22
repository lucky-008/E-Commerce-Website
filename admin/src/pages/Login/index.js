import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo (1).webp';
import { MyContext } from '../../App';
import pattern from '../../assets/images/pattern.webp';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import googleimg from '../../assets/images/ggogle.jpg'

const Login = () => {
    const context = useContext(MyContext);
    const [inputIndex , setinputIndex]=useState(null);
    const [isShowPassword , setisShowPassword]=useState(false);

    useEffect(() => {
        context.setisHideSidebarAndHeader(true);
        window.scrollTo(0,0 );
        return () => {
            context.setisHideSidebarAndHeader(false);
        };
    }, [context]);
    const focusInput = (index)=>{
        setinputIndex(index);
    }

    return (
        <>
            <img src={pattern} className='loginpatern' alt="login pattern" />
            <section className='loginSection'>
                <div className="loginBox">
                    <div className='logo text-center'>
                        <img src={logo} width="60px" alt="Hotash logo" />
                        <h5 className='font-weight-bolder'>Login To Hotash</h5>
                    </div>

                    <div className='wrapper mt-3 card border '>
                        <form>
                            <div className={`form-group  position-relative ${inputIndex===0 &&  'focus'}`}>
                                <span className='icon' >< MdEmail/></span> 
                                   
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter your email'
                                    
                                    onFocus={()=> focusInput(0)}
                                    onBlur={()=> setinputIndex(null)}  autoFocus/>

                                
                            </div>
                            <div className={`form-group  position-relative ${inputIndex===1 &&  'focus'}`}>
                                <span className='icon' >< RiLockPasswordFill /></span> 
                                   
                                <input
                                    type={`${isShowPassword === true ? 'text' : 'password'}`}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    
                                    onFocus={()=> focusInput(1)}
                                    onBlur={()=> setinputIndex(null)} />

                                    <span className='toggleShowPassword' onClick={()=>setisShowPassword(!isShowPassword)}>
                                        {
                                            isShowPassword === true ? <IoEyeSharp />  :<FaEyeSlash/>
                                        }
                                      
                                    </span>

                                
                            </div>

                            <div className='form-group '>
                                <Button className="btn-blue btn-lg btn-big w-100">Sign In</Button>
                            </div>
                            <div className='form-group text-center mt-3'>
                                <Link to={'/forgot-password'} className="link ">FORGOT PASSWORD</Link>

                                <div className='d-flex align-items-center justify-content-center or  mt-3 mb-3'>
                                    <span className='line'> </span>
                                        <span className='text'>or</span>
                                        <span className='line'></span>
                                   
                                </div>

                                <Button variant='outlined' className='w-100 btn-lg loginwithGoogle btn-big'>
                                    <img src={googleimg} width="25px"/> &nbsp;
                                    Sign In With Google
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className='wrapper mt-3 card border footer p-3'>
                        <span className='text-center'>
                            Dont't have an account ? 
                            <Link to={'/signUp'} className="link color ml-2">Register</Link>
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
