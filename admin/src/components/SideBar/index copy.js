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
const Sidebar =()=>{
    const[activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu,setisToggleSubmenu] = useState(false);
    const context = useContext(MyContext);
   const isOpenSubmenu=(index)=>{

setActiveTab(index);
setisToggleSubmenu(prev=>!prev);

   }


    
    return(
    <>
   <div className="sidebar">
    <ul>
        <li>
            <Link to="/">
            <Button className={`w-100 ${activeTab===0 ? "active":''}`} onClick={()=>isOpenSubmenu(0)}>
                <span className="icon"><LuLayoutDashboard/></span>
                dashboard<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li>
        
            <Button className={`w-100 ${activeTab===1  && isToggleSubmenu===true ? "active":''}`} onClick={()=>isOpenSubmenu(1)}>
                <span className="icon"><AiFillProduct/></span>
                Products<span className="arrow"><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
            <ul className="submenu">
                <li><Link to="/products">Product List</Link></li>
                <li><Link to="/product/details">Product View</Link></li>
                <li><Link to="/product/upload">Product Upload</Link></li>

            </ul></div>
        </li>
        <li>
        <Link to="/">
            <Button className={`w-100 ${activeTab===2 ? "active":''}`} onClick={()=>isOpenSubmenu(2)}>
                <span className="icon"><FaShoppingCart/></span>
                Orders<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li>
        <Link to="/">
            <Button className={`w-100 ${activeTab===3 ? "active":''}`} onClick={()=>isOpenSubmenu(3)}>
                <span className="icon"><FaMessage/></span>
                messages<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li>
        <Link to="/">
            <Button className={`w-100 ${activeTab===4 ? "active":''}`} onClick={()=>isOpenSubmenu(4)}>
                <span className="icon"><HiBellAlert/></span>
                notifications<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li>
        <Link to="/">
            <Button className={`w-100 ${activeTab===5 ? "active":''}`} onClick={()=>isOpenSubmenu(5)}>
                <span className="icon"><IoIosSettings/></span>
                settings<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li>
        <Link to="/">
            <Button className={`w-100 ${activeTab===6 ? "active":''}`} onClick={()=>isOpenSubmenu(6)}>
                <span className="icon"><LuLayoutDashboard/></span>
                dashboard<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li>
        <Link to="/">
            <Button className={`w-100 ${activeTab===7 ? "active":''}`} onClick={()=>isOpenSubmenu(7)}>
                <span className="icon"><FaMessage/></span>
                messages<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li>
        <Link to="/">
            <Button className={`w-100 ${activeTab===8 ? "active":''}`} onClick={()=>isOpenSubmenu(8)}>
                <span className="icon"><HiBellAlert/></span>
                notifications<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li> <Link to="/">
            <Button className={`w-100 ${activeTab===9 ? "active":''}`} onClick={()=>isOpenSubmenu(9)}>
                <span className="icon"><IoIosSettings/></span>
                settings<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li> <Link to="/">
            <Button className={`w-100 ${activeTab===10 ? "active":''}`} onClick={()=>isOpenSubmenu(10)}>
                <span className="icon"><LuLayoutDashboard/></span>
                dashboard<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
        <li> <Link to="/">
            <Button className={`w-100 ${activeTab===11 ? "active":''}`} onClick={()=>isOpenSubmenu(11)}>
                <span className="icon"><HiBellAlert/></span>
                notifications<span className="arrow"><FaAngleRight/></span>
            </Button></Link>
        </li>
       
        
        
    </ul>
    <br />

    <div className="logoutWrapper">
        <div className="logoutBox">
            <Button variant="contained"><IoMdLogOut/>Logout</Button>
        </div>

    </div>
   </div>
    </>
)

}
export default Sidebar;