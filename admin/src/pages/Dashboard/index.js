import DashboardBox from "./components/dashboardBox";
import { Button, Checkbox, Rating, requirePropFactory } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { GiStarsStack } from "react-icons/gi";
import { IoTimerOutline } from "react-icons/io5";
import { Chart } from "react-google-charts";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import skirts from '../../assets/images/skirts.jpg'
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";
import axios from 'axios';




import Menu from '@mui/material/Menu';

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteData, fetchDataFromApi } from "../../utils/api";

const label= {inputProps :{'arial-label': 'Checkbox demo'}}

const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];
const options = {
    'backgroundColor': 'transparent',
    legendTextStyle: { color: '#FFF' },
    titleTexrStyle: { color: '#FFF' },
    hAxis: { color: '#FFF' },

};
const Dashboard= () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showby, setshowBy] = useState('');
    const [showbysetCatBy, setCatBy] = useState('');
    const open = Boolean(anchorEl);
    const[productList,setProductList]=useState([]);
    const ITEM_HEIGHT = 48;

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHideSidebarAndHeader(false);
        
        fetchDataFromApi("/api/products").then((res)=>{
            if(res.length>0){
                setProductList(res);
            }else{
                setProductList([]);
            }
           

        })
    },[])

    const delProduct = (id) => {
        // Set progress to 40% while deletion is in progress
        context.setProgress(40);
    
        // Attempt to delete the product
        deleteData(`/api/products/${id}`)
            .then((res) => {
             
                context.setProgress(100);
    
                context.setAlertBox({
                    open: true,
                    error: false, 
                    msg: "Product deleted successfully",
                });
    
                // Fetch the updated list of products
                fetchDataFromApi("/api/products")
                    .then((res) => {
                        setProductList(res); // Update the product list with the new data
                    })
                    .catch((err) => {
                        // Handle error in fetching product list
                        context.setAlertBox({
                            open: true,
                            error: true,
                            msg: "Failed to fetch products after deletion",
                        });
                    });
            })
            .catch((err) => {
                // Set progress to 100% after deletion attempt, even if failed
                context.setProgress(100);
    
                // Show error message if deletion fails
                context.setAlertBox({
                    open: true,
                    error: true,
                    msg: "Failed to delete product. Please try again.",
                });
            });
    };
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaCircleUser />} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaShoppingCart />} grow={false} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<BiSolidShoppingBag />} grow={true} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} grow={true} />
                        </div>
                    </div>

                    <div className="col-md-4 pl-0 topPart2">
                        <div className="box graphBox">
                            <div className="d-flex w-100 bottomEle" style={{ position: "relative" }}>
                                <div className="col1" style={{ flex: 1 }}>

                                </div>


                            </div>

                            <div className="d-flex" style={{ width: "100%", alignItems: "center" }}>
                                <h5 className="text-white mb-0 mt-0">Total Sales</h5>

                                {/* Menu button for the three dots */}
                                <div style={{ marginLeft: "auto" }}>
                                    <Menu
                                        className="dropdown_menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                            paper: {
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose} aria-label="Last Day">
                                            <IoTimerOutline /> Last Day
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} aria-label="Last Week">
                                            <IoTimerOutline /> Last Week
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} aria-label="Last Month">
                                            <IoTimerOutline /> Last Month
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} aria-label="Last Year">
                                            <IoTimerOutline /> Last Year
                                        </MenuItem>
                                    </Menu>

                                    {/* Button with three dots */}
                                    <Button
                                        className="toggleIcon"
                                        onClick={handleClick}
                                        sx={{
                                            padding: 0,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                        aria-label="Open menu"
                                    >
                                        <HiDotsVertical />
                                    </Button>
                                </div>
                            </div>
                            <h3 className="text-white font-weight-bold">$3,456,678.00</h3>
                            <p >$3,567.90 in last month</p>

                            <Chart
                                chartType="PieChart"
                                width="100%"
                                height="200px"
                                data={data}
                                options={options}
                            />

                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>
                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    labelId="demo-select-small-label"

                                    labelid="demo-simple-select-helper"
                                    value={showby}
                                    label="Age"
                                    onChange={(e) => setshowBy(e.target.value)}
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select

                                    id="demo-simple-select-helper"
                                    value={showbysetCatBy}
                                    label="Age"
                                    onChange={(e) => setCatBy(e.target.value)}
                                    labelId="demo-select-small-label"

                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    labelId="demo-select-small-label"

                                    labelid="demo-simple-select-helper"
                                    value={showby}
                                    label="Age"
                                    onChange={(e) => setshowBy(e.target.value)}
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select

                                    id="demo-simple-select-helper"
                                    value={showbysetCatBy}
                                    label="Age"
                                    onChange={(e) => setCatBy(e.target.value)}
                                    labelId="demo-select-small-label"

                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                  
                                    <th style={{width:'300px'}}>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                   
                                    
                                    <th>RATING</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productList?.length>=0 && productList?.map((item,index)=>{
                                        return(
                                            <tr>
                                           
                                            <td><div className="d-flex align-items-center productBox">
                                                <div className="imgWrapper">
                                                    <div className="img card shadow m-0" >
                                                        <img src={`${context.baseUrl}uploads/${item.images[0]}`} className="w-100"></img>
                                                        {/* <img src={`${item.images[0]}`} className="w-100"></img> */}
                                                    </div>
                                                </div>
                                                <div className="info">
                                                <h6>{item.name}</h6>
                                                <p> {item.description}</p></div></div></td>
                                            <td>{item.category.name}</td>
                                            <td>{item.brand}</td>
                                            <td >
                                                <div style={{width:'70px'}}><del className="old">{item.oldPrice}</del>

                                            <span className="new text-danger">{item.price}</span></div></td>
                                           
                                            <td><Rating name="read-only" defaultValue={item.rating} precision={0.5} size="small"></Rating></td>
                                           
                                            <td>
                                                <div className="actions d-flex align-items-center">
                                                  <Link to="/product/details">
                                                  <Button  className="secondary" color="secondary"><FaEye/></Button></Link>
                                                    <Button className="success" color="success"><FaPencilAlt/></Button>
                                                    <Button  className="error"color="error" onClick={()=>delProduct(item.id)}><MdDelete/></Button>
                                                </div>
                                            </td>
                                        </tr>

                                        )
                                    })
                                }
                               
                               
                            </tbody>
                        </table>
                        <div className="d-flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>

                        <Pagination count={10}  color="primary"  className="pagination" showFirstButton showLastButton/></div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Dashboard;
