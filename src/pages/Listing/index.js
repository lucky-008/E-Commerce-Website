

import { Link } from "react-router-dom";
import banner7 from '../../assets/images/banner7.jpg'
import Sidebar from "../../components/Sidebar";
import { IoMenuOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { CgMenuGridO } from "react-icons/cg";
import { BsGridFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import HomeProduct from "../../components/HomeProduct";
import { CiMail } from "react-icons/ci";
import coupon from "../../assets/images/coupon.png";
import Pagination from '@mui/material/Pagination';



const Listing = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [productView,setproductView]=useState('one');
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (

        <>
            <section className="product_Listing_Page">

                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="content_right">
                            <img src={banner7} className="w-100" />
                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center btnWrapper">
                                    <Button  className={productView==="one" && 'act'}onClick={()=>setproductView('one')}><IoMenuOutline /></Button>
                                    <Button className= {productView==="two" && 'act'} onClick={()=>setproductView('two')}><CgMenuGridO /></Button>
                                    <Button className= {productView==="three" && 'act'}onClick={()=>setproductView('three')}><BsGridFill /></Button>
                                    <Button className= {productView==="four" && 'act' }onClick={()=>setproductView('four')}><TfiLayoutGrid4Alt /></Button>
                                </div>
                                <div className="ml-auto showByFilter">
                                    <Button   onClick={handleClick}>show<FaAngleDown /></Button>
                                    <Menu
                                    className="w-100 showPerPageDropdown"
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropDown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                        <MenuItem onClick={handleClose}>40</MenuItem>
                                        <MenuItem onClick={handleClose}>50</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            

                            <div className="productListing  ">

                                <HomeProduct itemView={productView}/>
                                <HomeProduct itemView={productView}/>
                               
                 
            
                                
                                
                                
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <Pagination count={10} color="primary" size="large" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>



        </>



    )


}

export default Listing;