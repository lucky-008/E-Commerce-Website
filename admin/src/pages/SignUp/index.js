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
import { FaUserCircle } from "react-icons/fa";
import { IoShield } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoIosHome } from "react-icons/io";
const SignUp = () => {


    const context = useContext(MyContext);
    const [inputIndex, setinputIndex] = useState(null);
    const [isShowPassword, setisShowPassword] = useState(false);
    const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);

    useEffect(() => {
        context.setisHideSidebarAndHeader(true);
        window.scrollTo(0,0 );
        return () => {
            context.setisHideSidebarAndHeader(false);
        };
    }, [context]);
    const focusInput = (index) => {
        setinputIndex(index);
    }

    return (
        <>
            <img src={pattern} className='loginpatern' alt="login pattern" />
            <section className='loginSection signUpSection'>

                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center flex-column part1 justify-content-center'>

                        <h1>BEST UI/UX FASHION <span className='text-sky'>ECOMMERCE DASHBOARD</span>  & ADMIN PANEL</h1>
                        <p>Elit Iusto dolore libero recusandae dolor dolores explicabo ullam cum facilis aperiam alias odio quam
                            excepturi molestiae omnis inventore.
                            Repudiandae officia placeat amet consectetur dicta dolorem quo</p>
                        <div className='w-100 mt-4'>
                            <Link to={'/'}>
                            <Button className='btn-blue btn-lg btn-big'><IoIosHome />Go to Home</Button> </Link></div>
                </div>


                <div className='col-md-4 pr-0'>

                    <div className="loginBox">
                        <div className='logo text-center'>
                            <img src={logo} width="60px" alt="Hotash logo" />
                            <h5 className='font-weight-bolder'>Register a New Account</h5>
                        </div>

                        <div className='wrapper mt-3 card border '>
                            <form>
                                <div className={`form-group  position-relative ${inputIndex === 0 && 'focus'}`}>
                                    <span className='icon' >< FaUserCircle /></span>

                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter your name'

                                        onFocus={() => focusInput(0)}
                                        onBlur={() => setinputIndex(null)}  autoFocus/>


                                </div>

                                <div className={`form-group  position-relative ${inputIndex === 1 && 'focus'}`}>
                                    <span className='icon' >< MdEmail /></span>

                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter your email'

                                        onFocus={() => focusInput(1)}
                                        onBlur={() => setinputIndex(null)} />


                                </div>
                                <div className={`form-group  position-relative ${inputIndex === 2 && 'focus'}`}>
                                    <span className='icon' >< RiLockPasswordFill /></span>

                                    <input
                                        type={`${isShowPassword === true ? 'text' : 'password'}`}
                                        className='form-control'
                                        placeholder='Enter your password'

                                        onFocus={() => focusInput(2)}
                                        onBlur={() => setinputIndex(null)} />

                                    <span className='toggleShowPassword' onClick={() => setisShowPassword(!isShowPassword)}>
                                        {
                                            isShowPassword === true ? <IoEyeSharp /> : <FaEyeSlash />
                                        }

                                    </span>


                                </div>

                                <div className={`form-group  position-relative ${inputIndex === 3 && 'focus'}`}>
                                    <span className='icon' >< IoShield /></span>

                                    <input
                                        type={`${isShowConfirmPassword === true ? 'text' : 'password'}`}
                                        className='form-control'
                                        placeholder='confirm your password'

                                        onFocus={() => focusInput(3)}
                                        onBlur={() => setinputIndex(null)} />

                                    <span className='toggleShowPassword' onClick={() => setisShowConfirmPassword(!isShowConfirmPassword)}>
                                        {
                                            isShowConfirmPassword === true ? <IoEyeSharp /> : <FaEyeSlash />
                                        }

                                    </span>


                                </div>

                                <FormControlLabel control={<Checkbox />} label="I agree to all Terms & Conditions" />

                                <div className='form-group  '>
                                    <Button className="btn-blue btn-lg btn-big w-100">Sign Up</Button>
                                </div>
                                <div className='form-group text-center mt-3'>


                                    <div className='d-flex align-items-center justify-content-center or  mt-3 mb-3'>
                                        <span className='line'> </span>
                                        <span className='text'>or</span>
                                        <span className='line'></span>

                                    </div>

                                    <Button variant='outlined' className='w-100 btn-lg loginwithGoogle btn-big'>
                                        <img src={googleimg} width="25px" /> &nbsp;
                                        Sign In With Google
                                    </Button>
                                </div>
                            </form>

                            <span className='text-center d-block mt-3'>
                                Already have an account ?
                                <Link to={'/login'} className="link color ml-2">Login</Link>
                            </span>
                        </div>


                    </div>
                </div>
            </div>



        </section >
        </>
    );


}
export default SignUp;