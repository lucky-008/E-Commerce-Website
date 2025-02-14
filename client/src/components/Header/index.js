
import Logo from '../../assets/images/header-logo.jpg';
import Button from '@mui/material/Button';
import CountryDropdown from '../country-dropdown';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBar from './searchbar';
import Navigation from './navigation';
import { useContext, useEffect } from 'react';
import { MyContext } from '../../App';
import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(true);
    }, [context]);

    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center"> Welcome to ecommerce site by one click  <b>order</b> here instantly</p>
                    </div>
                </div>
                <div className="header">



                    < div className="container">
                        < div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt="logo" /></Link>

                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                    context.countryList.length !== 0 && <CountryDropdown />
                                }

                                <SearchBar />



                                <div className='part3 d-flex align-items-center ml-auto'>
                                    {
                                        context.isLogin !== true ? (
                                            <Link to="/signIn">
                                                <Button className="btn-blue btn-big btn-round mr-3">Sign In</Button>
                                            </Link>
                                        ) : (
                                            <Button className="circle">
                                                <FaRegCircleUser />
                                            </Button>
                                        )
                                    }

                                    <div className='ml-auto cart-items d-flex align-items-center'>
                                        <div className='price'>$3.38</div>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle' ><MdOutlineShoppingCart /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    <header />



                    <Navigation />



                </div>
            </div>
        </>
    )
}


export default Header;