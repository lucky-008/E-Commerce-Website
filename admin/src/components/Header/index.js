import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import logo from '../../assets/images/logo.webp';
import { Button } from "@mui/material";
import { IoMenu } from "react-icons/io5";

import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { HiBellAlert } from "react-icons/hi2";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { IoShieldSharp } from "react-icons/io5";
import { MyContext } from "../../App";
import UserAvatarImgComponent from "../../components/userImgCircle/index.js";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDr, setisOpennotificationDr] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDr);

    const context = useContext(MyContext);

    const handleOpenMyAccDr = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDr = () => {
        setAnchorEl(null);
    };
    const handleOpennotificationsDr = () => {
        setisOpennotificationDr(true);
    };
    const handleClosenotificationsDr = () => {
        setisOpennotificationDr(false);
    };

    return (
        <>
            <header className="row d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-2 part1 d-flex align-items-center">
                            <Link to={'/'} className="d-flex align-items-center logo pr-2">
                                <img src={logo} className="logo" />
                                <span className="ml-2">HOTASH</span>
                            </Link>
                        </div>

                        {
                            context.windowWidth > 992 && (
                                <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                                    <Button
                                        className="rounded-circle mr-3"
                                        onClick={() => context.setisToggleSidebar(!context.isToggleSidebar)}
                                    >
                                        {context.isToggleSidebar === false ? <MdMenuOpen /> : <IoMenu />}
                                    </Button>
                                    <SearchBox />
                                </div>
                            )
                        }

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                        <Button 
    className="rounded-circle mr-3" 
    onClick={() => context.setThemeMode(!context.themeMode)}
>
    {context.themeMode ? <MdDarkMode /> : <CiLight />}
</Button>


                            <div className="dropdownWrapper position-relative">
                                <Button className="rounded-circle mr-3" onClick={handleOpennotificationsDr}><HiBellAlert /></Button>
                                <Button className="rounded-circle mr-3" onClick={() => context.openNav()}><IoMenu /></Button>
                                <Button className="rounded-circle custom-button-spacing"><IoCartOutline /></Button>
                                <Button className="rounded-circle custom-button-spacing"><MdOutlineMail /></Button>

                                <Menu
                                    anchorEl={isOpennotificationDr}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleClosenotificationsDr}
                                    onClick={handleClosenotificationsDr}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className="head pl-3 pb-0">
                                        <h4>orders(12)</h4>
                                    </div>
                                    <Divider className="mb-1" />

                                    <div className="scroll">
                                        {/* Example Notification Items */}
                                        <MenuItem onClick={handleCloseMyAccDr}>
                                            <div className="d-flex">
                                                <div>
                                                    <UserAvatarImgComponent img={'https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} />
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favourite list<b>Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                                
                                                
                                            </div>
                                            
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDr}>
                                            <div className="d-flex">
                                                <div>
                                                    <UserAvatarImgComponent img={'https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} />
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favourite list<b>Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                                
                                                
                                            </div>
                                            
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDr}>
                                            <div className="d-flex">
                                                <div>
                                                    <UserAvatarImgComponent img={'https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} />
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b> added to his favourite list<b>Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                                
                                                
                                            </div>
                                            
                                        </MenuItem>
                                        {/* Additional notifications can be added here */}
                                    </div>

                                    <div className="pl-3 pr-2 w-100 pt-2 pb-1">
                                        <Button className="btn-blue w-100">view all notifications</Button>
                                    </div>
                                </Menu>
                            </div>

                            {
                                context.isLogin !== true ?
                                    <Link to={'/login'}><Button className="btn-blue btn-lg btn-round">Sign In</Button></Link>
                                    :
                                    <div className="myAccWrapper">
                                        <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDr}>
                                            <div className="userImg">
                                                <span className="rounded-circle">
                                                    <img src="https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                                                </span>
                                            </div>
                                            <div className="userInfo res-hide">
                                                <h4>lucky verma</h4>
                                                <p className="mb-0">@lucky14</p>
                                            </div>
                                        </Button>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={openMyAcc}
                                            onClose={handleCloseMyAccDr}
                                            onClick={handleCloseMyAccDr}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={handleCloseMyAccDr}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                My account
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDr}>
                                                <ListItemIcon>
                                                    <IoShieldSharp fontSize="small" />
                                                </ListItemIcon>
                                                Reset password
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDr}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
