import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

    const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false);
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1 '>
                        <div className='catWrapper'>
                            <Button className='allCatTab d-flex align-items-center' onClick={() => { setisOpenSidebarVal(!isOpenSidebarVal) }}>
                                <div><IoMenu /></div>
                                <div className="text"> CATEGORIES</div>
                                <div> <IoChevronDownOutline /></div>
                            </Button>
                            <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>men<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <Link to="/"><Button>clothing</Button></Link>
                                            <Link to="/"><Button>footwear</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                            <Link to="/"><Button>accessories</Button></Link>
                                            <Link to="/"><Button>goggles</Button></Link>
                                        </div>

                                    </li>
                                    <li><Link to="/"><Button>women<FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submenu'>
                                            <Link to="/"><Button>clothing</Button></Link>
                                            <Link to="/"><Button>footwear</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                            <Link to="/"><Button>accessories</Button></Link>
                                            <Link to="/"><Button>goggles</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>kids<FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submenu'>
                                            <Link to="/"><Button>clothing</Button></Link>
                                            <Link to="/"><Button>footwear</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                            <Link to="/"><Button>accessories</Button></Link>
                                            <Link to="/"><Button>goggles</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>beauty<FaAngleRight className='ml-auto'/></Button></Link>
                                    
                                    <div className='submenu'>
                                            <Link to="/"><Button>clothing</Button></Link>
                                            <Link to="/"><Button>footwear</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                            <Link to="/"><Button>accessories</Button></Link>
                                            <Link to="/"><Button>goggles</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>fashion<FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submenu'>
                                            <Link to="/"><Button>clothing</Button></Link>
                                            <Link to="/"><Button>footwear</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                            <Link to="/"><Button>accessories</Button></Link>
                                            <Link to="/"><Button>goggles</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>men<FaAngleRight className='ml-auto'/></Button></Link>
                                    
                                    <div className='submenu'>
                                            <Link to="/"><Button>clothing</Button></Link>
                                            <Link to="/"><Button>footwear</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                            <Link to="/"><Button>accessories</Button></Link>
                                            <Link to="/"><Button>goggles</Button></Link>
                                        </div></li>
                                    <li><Link to="/"><Button>women</Button></Link></li>
                                    <li><Link to="/"><Button>kids</Button></Link></li>
                                    <li><Link to="/"><Button>beauty</Button></Link></li>
                                    



                                </ul>

                            </div>

                        </div>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>HOME</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>MEN</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>accessories</Button></Link>
                                    <Link to="/"><Button>goggles</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><Button>WOMEN</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>accessories</Button></Link>
                                    <Link to="/"><Button>goggles</Button></Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button>BAKERY</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>accessories</Button></Link>
                                    <Link to="/"><Button>goggles</Button></Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button>GROCERY</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>accessories</Button></Link>
                                    <Link to="/"><Button>goggles</Button></Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button>BLOG</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>accessories</Button></Link>
                                    <Link to="/"><Button>goggles</Button></Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button>CONTACT</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>accessories</Button></Link>
                                    <Link to="/"><Button>goggles</Button></Link>
                                </div></li>

                        </ul>

                    </div>

                </div>

            </div>
        </nav>

    )
}
export default Navigation;