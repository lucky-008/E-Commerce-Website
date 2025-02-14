
import React from "react";
import { IoShirtOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDiscount } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><IoShirtOutline /></span>
                        <span className="ml-2">Everyday fresh products</span>

                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery /></span>
                        <span className="ml-2">free delivery for order over $70</span>

                    </div>
                    <div className="col d-flex align-items-center">
                        <span><MdOutlineDiscount /></span>
                        <span className="ml-2">daily mega discounts</span>

                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiDollar /></span>
                        <span className="ml-2">best prices in the market</span>

                    </div>
                </div>



                <div className="row mt-5 linksWrap">
                    <div className="col text-left">
                        <h5>FRUITS AND VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">herbs and seasonings</Link></li>
                            <li><Link to="#">fresh fruits</Link></li>
                            <li><Link to="#">cuts and sprouts</Link></li>
                            <li><Link to="#">exotic fruits and veggies</Link></li>
                            <li><Link to="#">packaged products</Link></li>
                            <li><Link to="#">groceries</Link></li>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">natural vegetables</Link></li>
                            

                        </ul>

                    </div>
                    <div className="col text-left">
                        <h5>BREAKFAST AND DAIRY</h5>
                        <ul>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">herbs and seasonings</Link></li>
                            <li><Link to="#">fresh fruits</Link></li>
                            <li><Link to="#">cuts and sprouts</Link></li>
                            <li><Link to="#">exotic fruits and veggies</Link></li>
                            <li><Link to="#">packaged products</Link></li>
                            <li><Link to="#">groceries</Link></li>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">natural vegetables</Link></li>
                            

                        </ul>

                    </div>
                    <div className="col text-left">
                        <h5>MEAT AND SEAFOOD</h5>
                        <ul>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">herbs and seasonings</Link></li>
                            <li><Link to="#">fresh fruits</Link></li>
                            <li><Link to="#">cuts and sprouts</Link></li>
                            <li><Link to="#">exotic fruits and veggies</Link></li>
                            <li><Link to="#">packaged products</Link></li>
                            <li><Link to="#">groceries</Link></li>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">natural vegetables</Link></li>
                            

                        </ul>

                    </div>
                    <div className="col text-left">
                        <h5>BEVERAGES</h5>
                        <ul>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">herbs and seasonings</Link></li>
                            <li><Link to="#">fresh fruits</Link></li>
                            <li><Link to="#">cuts and sprouts</Link></li>
                            <li><Link to="#">exotic fruits and veggies</Link></li>
                            <li><Link to="#">packaged products</Link></li>
                            <li><Link to="#">groceries</Link></li>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">natural vegetables</Link></li>
                            

                        </ul>

                    </div>
                    <div className="col text-left ">
                        <h5>BREADS AND BAKERY</h5>
                        <ul>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">herbs and seasonings</Link></li>
                            <li><Link to="#">fresh fruits</Link></li>
                            <li><Link to="#">cuts and sprouts</Link></li>
                            <li><Link to="#">exotic fruits and veggies</Link></li>
                            <li><Link to="#">packaged products</Link></li>
                            <li><Link to="#">groceries</Link></li>
                            <li><Link to="#">fresh vegetables</Link></li>
                            <li><Link to="#">natural vegetables</Link></li>
                            

                        </ul>

                    </div>
                </div>


                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">copyright 2025 bacola wordpress theme.all rights reserved.powered by klbtheme</p>
                    <ul className="list list-inline ml-auto mb-0 socials">
                        <li className="list-inline-item ">
                         <Link to="#"><FaFacebook /></Link>
                        </li>
                        <li className="list-inline-item">
                         <Link to="#"><FaXTwitter /></Link>
                        </li>
                        <li className="list-inline-item">
                         <Link to="#"><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>

    )
}

export default Footer;