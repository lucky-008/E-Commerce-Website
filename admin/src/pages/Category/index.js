import DashboardBox from "./components/dashboardBox";
import { Button, Checkbox } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import skirts from '../../assets/images/skirts.jpg'
import Pagination from '@mui/material/Pagination';

import { Breadcrumbs, Chip } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';




import Menu from '@mui/material/Menu';

import  React,{ useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteData, editData, fetchDataFromApi } from "../../utils/api";
import { MyContext } from "../../App";
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
const Category = () => {
    const [catData, setCatData] = useState([]);
    const [open, setOpen] = useState(false);
    const [editFields, setEditFields] = useState({});
    const [editId, setEditId] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const[ page,setPage] = useState(1);
    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    });
    const context = useContext(MyContext);

    useEffect(() => {
        window.scrollTo(0, 0);
       context.setProgress(20)
        fetchDataFromApi('/api/category').then((res) => {
            setCatData(res);
            console.log(res);
           
            context.setProgress(100)
        });
    }, []);

    const changeInput = (e) => {
        setFormFields((formFields) => ({
            ...formFields,
            [e.target.name]: e.target.value,
        }));
    };
    const addImgUrl = (e)=>{
        const arr =[];
        arr.push(e.target.value);
        setFormFields((formFields) => ({
            ...formFields,
            [e.target.name]: arr,
        }));
    }

    const handleClose = () => {
        setOpen(false);
    };

    const editCategory = (id) => {
        setOpen(true);
        setEditId(id);

        fetchDataFromApi(`/api/category/${id}`).then((res) => {
            setFormFields({
                name: res.name,
                images: res.images,
                color: res.color,
            });
            console.log(res);
        });
    };

    const CategoryEditFun = (e) => {
        e.preventDefault();

        setIsLoading(true);
        context.setProgress(40);
        editData(`/api/category/${editId}`, formFields).then((res) => {
            fetchDataFromApi('/api/category').then((res) => {
                setCatData(res);
                setOpen(false); 
                setIsLoading(false);
            });

            context.setAlertBox({
                open:true,
                error : false,
                msg:"category updated"
                
            });
            context.setProgress(100);

        });
    };

    const deleteCat=(id) =>{
deleteData(`/api/category/${id}`).then(res=>{
    fetchDataFromApi('/api/category').then((res) => {
        setCatData(res);
    })

})
    }

    const handleChange = (event , value)=>{
        context.setProgress(40);
        fetchDataFromApi(`/api/category?page=${value}`).then((res)=>
        {
            setCatData(res);
            context.setProgress(100);
        
        })
    }
    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 className="mb-0">Category List</h5>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        <div className="ml-auto d-flex align-items-center">

                       

                        <Breadcrumbs aria-label="breadcrumb " className="ml-auto breadcrumbs_">

                            <Chip label="Dashboard" component="a" href="#" icon={<HomeIcon fontSize="small" />} />
                            <Chip label="category" component="a" href="#" />
                           

                        </Breadcrumbs>
                        <Link to="/category/add" ><Button className="btn-blue ml-5 pl-2 pr-2"> add category</Button></Link>
                      
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>
                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th style={{ width: '300px' }}>IMAGES</th>
                                    <th>CATEGORY</th>
                                    <th>COLOR</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {catData?.categoryList?.length !== 0 &&catData?.categoryList?.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <Checkbox {...label} /> <span>#{index + 1}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center productBox">
                                                        <div className="imgWrapper">
                                                            <div className="img">
                                                                <img src={item?.images[0]} className="w-100" alt="category" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.color}</td>
                                                <td>
                                                    <div className="actions d-flex align-items-center">
                                                        <Button
                                                            className="success"
                                                            color="success"
                                                            onClick={() => editCategory(item.id)}
                                                        >
                                                            <FaPencilAlt />
                                                        </Button>
                                                        <Button className="error" color="error" onClick={()=>deleteCat(item.id)}>
                                                            <MdDelete />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                        <div className="d-flex tableFooter">
                            
                            <Pagination count={catData?.totalPages} color="primary" className="pagination" showFirstButton showLastButton onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                className="editModal"
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: CategoryEditFun, // Submit on form submit
                    },
                }}
            >
                <DialogTitle>EDIT CATEGORY</DialogTitle>
                <DialogContent>
                
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Category name"
                        type="text"
                        fullWidth
                        value={formFields.name}
                        onChange={changeInput}
                    />
               
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="images"
                        name="images"
                        label="Category Image"
                        type="text"
                        fullWidth
                        value={formFields.images}
                        onChange={addImgUrl}
                    />
           
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="color"
                        name="color"
                        label="Category color"
                        type="text"
                        fullWidth
                        value={formFields.color}
                        onChange={changeInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined">
                        Cancel
                    </Button>
                    <Button type="submit"  variant="contained">
                         {isLoading===true ?<CircularProgress color="inherit" className="loader" />  : 'Submit'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Category;

