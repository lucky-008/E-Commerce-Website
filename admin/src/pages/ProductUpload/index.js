import React, { useRef, useState, useEffect, useContext } from 'react';
import { Select, MenuItem, Button, Rating, Breadcrumbs, Chip } from '@mui/material';
import { FaCloudUploadAlt, FaRegImages } from 'react-icons/fa';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import skirts from '../../assets/images/skirts.jpg';
import HomeIcon from '@mui/icons-material/Home';
import { MyContext } from "../../App";
import { fetchDataFromApi, postData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const ProductUpload = () => {
    const [categoryVal, setCategoryVal] = useState('');
    const [featuredVal, setFeaturedVal] = useState(null);
    const [productImagesArr, setProductImagesArr] = useState([]);
    const [catData, setCatData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [files, setFiles] = useState([]);
    const [imgFiles, setImgFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const history = useNavigate();
    const [formFields, setFormFields] = useState({
        name: '',
        description: '',
        brand: '',
        price: null,
        oldPrice: null,
        category: '',
        countInStock: null,
        rating: 0,
        isFeatured: null,
        images: []
    });

    const context = useContext(MyContext);
    const [ratingValue, setRatingValue] = useState(1);
    const [count, setCount] = useState(0);
    const productImages = useRef();
    const formdata = new FormData();

    // Fetching categories on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
        context.setProgress(20);

        fetchDataFromApi('/api/category').then((res) => {
            console.log(res); // Debugging API response
            setCatData(res);
            context.setProgress(100);
        });
    }, []);

    // Handling image previews
    useEffect(() => {
        if (!imgFiles) return;

        let tmp = [];
        for (let i = 0; i < imgFiles.length; i++) {
            tmp.push(URL.createObjectURL(imgFiles[i])); // Use imgFiles instead of files
        }

        setPreviews(tmp); // Store object URLs in state

        // Cleanup function to revoke object URLs when imgFiles changes or component unmounts
        return () => {
            tmp.forEach(url => {
                URL.revokeObjectURL(url); // Revoke each object URL to avoid memory leaks
            });
        };
    }, [imgFiles]);

    // Handle category change
    const handleCategoryChange = (e) => {
        setCategoryVal(e.target.value);
        setFormFields((prevFormFields) => ({
            ...prevFormFields,
            category: e.target.value, // Make sure the category is set correctly here
        }));
    };
    
    // Handle featured status change
    const handleFeaturedChange = (e) => {
        setFeaturedVal(e.target.value);
        setFormFields((prevFormFields) => ({
            ...prevFormFields,
            isFeatured: e.target.value === 'true',
        }));
    };

    // Handle file input change
    const onChangeFile = async (e, apiEndPoint) => {
        try {
            const imgArr = [];
            const files = e.target.files;

            // Initialize FormData object
            const formdata = new FormData();

            // Check file type and size before processing
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                imgArr.push(file); // Store the files in imgArr
                formdata.append('images', file); // Append to FormData for uploading
            }

            setImgFiles(imgArr); // Update local state with the selected files

            // Make the POST request to the API endpoint
            postData(apiEndPoint, formdata).then((res) => {
                console.log(res);
            });
        } catch (error) {
            console.error("Error uploading files:", error); // Log the error
        }
    };

    // Handle form input change
    const inputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'images' && files) {
            setFormFields((prevFormFields) => ({
                ...prevFormFields,
                [name]: [...prevFormFields[name] || [], ...Array.from(files)],
            }));
        } else {
            setFormFields((prevFormFields) => ({
                ...prevFormFields,
                [name]: value,
            }));
        }
    };

    // Handle product submission
    const addProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', formFields.name);
        formData.append('description', formFields.description);
        formData.append('brand', formFields.brand);
        formData.append('price', formFields.price);
        formData.append('oldPrice', formFields.oldPrice);
        formData.append('category', formFields.category);
        formData.append('countInStock', formFields.countInStock);
        formData.append('rating', formFields.rating);
        formData.append('isFeatured', formFields.isFeatured);

        console.log(formFields.category,"cat")
        // Ensure images are appended correctly
        if (imgFiles && imgFiles.length > 0) {
            imgFiles.forEach(file => {
                formData.append('images', file);
            });
        }

        // Form validation
        if (formFields.name === '') {
            context.setAlertBox({
                open: true,
                msg: 'Please add product name',
                error: true
            });
            return false;
        }

        if (formFields.description === '') {
            context.setAlertBox({
                open: true,
                msg: 'Please add product description',
                error: true
            });
            return false;
        }

        if (formFields.brand === '') {
            context.setAlertBox({
                open: true,
                msg: 'Please add product brand',
                error: true
            });
            return false;
        }

        if (formFields.price === null) {
            context.setAlertBox({
                open: true,
                msg: 'Please add product price',
                error: true
            });
            return false;
        }

        if (formFields.oldPrice === null) {
            context.setAlertBox({
                open: true,
                msg: 'Please add product old price',
                error: true
            });
            return false;
        }

        if (formFields.category === '') {
            context.setAlertBox({
                open: true,
                msg: 'Please select a product category',
                error: true
            });
            return false;
        }

        if (formFields.countInStock === null) {
            context.setAlertBox({
                open: true,
                msg: 'Please add product stock',
                error: true
            });
            return false;
        }

        if (formFields.rating === 0) {
            context.setAlertBox({
                open: true,
                msg: 'Please select a product rating',
                error: true
            });
            return false;
        }

        if (formFields.isFeatured === null) {
            context.setAlertBox({
                open: true,
                msg: 'Please select if the product is featured or not',
                error: true
            });
            return false;
        }

        setIsLoading(true);

        // Make the POST request to create the product
        postData('/api/products/create', formData).then((res) => {
            context.setAlertBox({
                open: true,
                msg: 'Product is created',
                error: false
            });
            setIsLoading(false);
            setFormFields({
                name: '',
                description: '',
                brand: '',
                price: 0,
                oldPrice: 0,
                category: '',
                countInStock: 0,
                rating: 0,
                isFeatured: 0,
                images: []
            });
        }).catch((error) => {
            setIsLoading(false);
            context.setAlertBox({
                open: true,
                msg: 'Failed to create product. Please try again.',
                error: true
            });

            history('/products');
        });


    };

    return (
        <div className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                <h5 className="mb-0">Product upload</h5>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <Chip label="Dashboard" component="a" href="#" icon={<HomeIcon fontSize="small" />} />
                        <Chip label="Products" component="a" href="#" />
                        <Chip label="Product View" />
                    </Breadcrumbs>
                </div>
            </div>

            <form className="form" onSubmit={addProduct}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4 mt-0">
                            <h5 className="mb-4">Basic Information</h5>
                            <div className="form-group">
                                <h6>PRODUCT NAME</h6>
                                <input type="text" name="name" value={formFields.name} onChange={inputChange} />
                            </div>
                            <div className="form-group">
                                <h6>DESCRIPTION</h6>
                                <textarea rows={5} cols={10} name='description' value={formFields.description} onChange={inputChange} />
                            </div>
                        </div>

                        {/* CATEGORY */}
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <h6>CATEGORY</h6>
                                    <Select
                                        value={categoryVal}
                                        onChange={handleCategoryChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'without label' }}
                                        className="w-100"
                                    >
                                        <MenuItem value="">
                                            <em value={null}>NONE</em>
                                        </MenuItem>
                                        {
                                            catData?.categoryList?.length !== 0 &&
                                            catData.categoryList?.map((cat, index) => {
                                                return (
                                                    <MenuItem className='text-capitalize' value={cat.id} key={index}>
                                                        {cat.name}
                                                    </MenuItem>
                                                );
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <h6>BRAND</h6>
                                    <input type="text" name='brand' value={formFields.brand} onChange={inputChange} />
                                </div>
                            </div>
                        </div>

                        {/* PRICE */}
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <h6>OLD PRICE</h6>
                                    <input type="text" name="oldPrice" value={formFields.oldPrice} onChange={inputChange} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>PRICE</h6>
                                    <input type="text" name="price" value={formFields.price} onChange={inputChange} />
                                </div>
                            </div>
                        </div>

                        {/* IS FEATURED */}
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <h6 className="text-uppercase">Is Featured</h6>
                                    <Select
                                        value={featuredVal}
                                        onChange={handleFeaturedChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'without label' }}
                                        className="w-100"
                                    >
                                        <MenuItem value="">
                                            <em value={null}>NONE</em>
                                        </MenuItem>
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <h6>PRODUCT STOCK</h6>
                                    <input type="text" name="countInStock" value={formFields.countInStock} onChange={inputChange} />
                                </div>
                            </div>
                        </div>

                        {/* RATING */}
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <h6>RATING</h6>
                                    <Rating
                                        name="rating"
                                        value={ratingValue}
                                        onChange={(e, newValue) => {
                                            setRatingValue(newValue);
                                            setFormFields((prevFormFields) => ({
                                                ...prevFormFields,
                                                rating: newValue,
                                            }));
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* PRODUCT IMAGES */}
                        {/* <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <h6 className="text-uppercase">PRODUCT IMAGES</h6>
                                    <div className="position-relative inputBtn">
                                        <input
                                            type="text"
                                            required
                                            ref={productImages}
                                            style={{ paddingRight: '100px' }}
                                            name="images"
                                            onChange={inputChange}
                                        />
                                        <Button className="btn-blue" onClick={addProductImages}>
                                            ADD
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* MEDIA AND PUBLISHED */}
                        <div className="card p-4 mt-0">
                            <div className="imagesUploadSec">
                                <h5 className="mb-4">MEDIA AND PUBLISHED</h5>
                                <div className="imgUploadBox d-flex align-items-center">
                                    {
                                        previews?.length !== 0 && previews?.map((images, index) => {
                                            return (
                                                <div className='uploadBox' key={index}>
                                                    <img src={images} className='w-100' alt={`preview-${index}`} />
                                                </div>
                                            );
                                        })
                                    }

                                    <div className="uploadBox" style={{ marginRight: '20px' }}>
                                        <input
                                            type="file"
                                            name="images"
                                            onChange={(e) => onChangeFile(e, '/api/products/upload')}
                                            multiple
                                        />
                                        <div className="info">
                                            <FaRegImages />
                                            <h5>Image Upload</h5>
                                        </div>
                                    </div>
                                </div>

                                <Button type="submit" className="btn-blue btn-big btn-lg w-100 mt-3 mr-3">
                                    <FaCloudUploadAlt /> {isLoading === true ? <CircularProgress color="inherit" className="loader" /> : 'PUBLISH AND VIEW'}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Display uploaded product images */}

                </div>
            </form>
        </div>
    );
};

export default ProductUpload;
