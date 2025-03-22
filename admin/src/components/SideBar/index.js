import { Button } from "@mui/material";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";
import { FaMessage } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from "../../App";


const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleProducts, setIsToggleProducts] = useState(false);
    const [isToggleCategories, setIsToggleCategories] = useState(false);
    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        
        // Toggle the correct submenu
        if (index === 1) {
            setIsToggleProducts(prev => !prev);
        } else if (index === 2) {
            setIsToggleCategories(prev => !prev);
        }
    };

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? "active" : ''}`} onClick={() => isOpenSubmenu(0)}>
                                <span className="icon"><LuLayoutDashboard /></span>
                                dashboard<span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isToggleProducts ? "active" : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className="icon"><AiFillProduct /></span>
                            Products<span className="arrow"><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${isToggleProducts ? 'colapse' : 'colapsed'}`}>
                            <ul className="submenu">
                                <li><Link to="/products">Product List</Link></li>
                                <li><Link to="/product/details">Product View</Link></li>
                                <li><Link to="/product/upload">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 2 && isToggleCategories ? "active" : ''}`} onClick={() => isOpenSubmenu(2)}>
                            <span className="icon"><AiFillProduct /></span>
                            Categories<span className="arrow"><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${isToggleCategories ? 'colapse' : 'colapsed'}`}>
                            <ul className="submenu">
                                <li><Link to="/category">Category List</Link></li>
                                <li><Link to="/category/add">Add a Category</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <br />
                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained"><IoMdLogOut />Logout</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
