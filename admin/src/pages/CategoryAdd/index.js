import React, { useContext, useState } from 'react';
import { Select, MenuItem, Button, Rating } from '@mui/material';
import { FaCloudUploadAlt, FaRegImages } from "react-icons/fa";
import 'react-lazy-load-image-component/src/effects/blur.css';
import skirts from '../../assets/images/skirts.jpg';
import { Breadcrumbs, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {  postData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import{ useNavigate} from'react-router-dom';
import { MyContext } from '../../App';


const ProductUpload = () => {
    const history = useNavigate();

    const context = useContext(MyContext);
    
     const [isLoading,setIsLoading] = useState(false);
    
    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    });

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

    const addCategory = (e) => {
        e.preventDefault();

        if(formFields.name!=="" && formFields.images.length!==0 && formFields.color!==""){
            setIsLoading(true);
    postData('/api/category/create',formFields).then(res=>{
        setIsLoading(false);
        history('/category')
    })
    }
    else {
        context.setAlertBox({
            open:true,
            error:true,
            msg:"please fill all the details"
        });
        return false;
      

    }
        }
        
        

    return (
        <div className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                <h5 className="mb-0">Add Category</h5>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Breadcrumbs aria-label="breadcrumb " className="ml-auto breadcrumbs_">
                        <Chip
                            label="Dashboard"
                            component="a"
                            href="#"
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <Chip
                            label="products"
                            component="a"
                            href="#"
                        />
                        <Chip
                            label="add category"
                        />
                    </Breadcrumbs>
                </div>
            </div>

            <form className="form" onSubmit={addCategory}>
                <div className="row">
                    <div className="col-sm-9">
                        <div className="card p-4 ">
                            
                            <div className="form-group">
                                <h6>CATEGORY NAME</h6>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={changeInput}
                                    value={formFields.name}
                                />
                            </div>
                            <div className="form-group">
                                <h6>IMAGE URL</h6>
                                <input
                                    type="text"
                                    name="images"
                                    onChange={addImgUrl}
                                    value={formFields.images}
                                />
                            </div>
                            <div className="form-group">
                                <h6>COLOR</h6>
                                <input
                                    type="text"
                                    name="color"
                                    onChange={changeInput}
                                    value={formFields.color}
                                />
                            </div>

                            <Button type="submit" className="btn-blue btn-big btn-lg w-100 mt-3">
                                <FaCloudUploadAlt /> {isLoading===true ?<CircularProgress color="inherit" className="loader" />  : 'PUBLISH AND VIEW'} 
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductUpload;
