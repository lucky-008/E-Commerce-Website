import React, { useRef } from 'react';
import { Breadcrumbs, Chip, useTheme, emphasize, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import Slider from "react-slick";
import skirts from '../../assets/images/skirts.jpg'
import img from'../../assets/images/logo.jpg'
import { MdBrandingWatermark } from "react-icons/md";
import LinearProgress from '@mui/material/LinearProgress';
import UserAvatarImgComponent from "../../components/userImgCircle/index.js";
import Rating from '@mui/material/Rating';
import { FaReply } from "react-icons/fa";


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];

    return {
        backgroundColor,
        height: theme.spacing(4),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

// Use `useTheme` hook to access 
// 
// 
// 
// 
// theme
const ProductDetails = () => {

const productSliderBig=useRef();
const productSliderSml=useRef();

    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    const goToSlide = (index) => {
        
            productSliderBig.current.slickGoTo(index);
            productSliderSml.current.slickGoTo(index);
        
    };
    
    
    const theme = useTheme();  // This should give you access to the theme

    // Log theme for debugging
    console.log('Theme:', theme);  // Check if the theme is available

    return (
        <div className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                <h5 className="mb-0 ">Product View  </h5>
               <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <Breadcrumbs aria-label="breadcrumb " className="ml-auto  breadcrumbs_  ">
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
                        label="product view"

                    />
                </Breadcrumbs>


            </div>
            </div>

            <div className='card productdetailsSection'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='sliderWrapper pt-3 pb-3 pl-4 pr-4'>
                            <h5 className='mb-4'>Product Gallery</h5>
                            <Slider {...productSliderOptions} ref={productSliderBig} className='sliderBig mb-3'>


                                <div className='item'>
                                    <img src={skirts} className='w-100' />

                                </div>
                                <div className='item'>
                                    <img src={img} className='w-100' />

                                </div>
                                <div className='item'>
                                    <img src={skirts} className='w-100' />

                                </div>
                                <div className='item'>
                                    <img src={skirts} className='w-100' />

                                </div>
                                <div className='item'>
                                    <img src={skirts} className='w-100' />

                                </div>
                                <div className='item'>
                                    <img src={skirts} className='w-100' />

                                </div>


                            </Slider>
                            <Slider {...productSliderSmlOptions}ref={productSliderSml} className='sliderSml'>

                                <div className='item' onClick={() =>goToSlide(0)}>
                                    <img src={skirts} className='w-100' />

                                </div>



                                <div className='item' onClick={() =>goToSlide(1)}>
                                    <img src={img} className='w-100' />

                                </div>



                                <div className='item' onClick={()=>goToSlide(2)}>
                                    <img src={skirts} className='w-100' />

                                </div>



                                <div className='item' onClick={()=>goToSlide(3)}>
                                    <img src={skirts} className='w-100' />

                                </div>


                                <div className='item' onClick={()=>goToSlide(4)}>
                                    <img src={skirts} className='w-100' />

                                </div>



                                <div className='item' onClick={()=>goToSlide(5)}>
                                    <img src={skirts} className='w-100' />

                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className='col-md-7'>
                        <div className='pt-3 pb-3 pl-4 pr-4'>
                            <h5 className='mb-4'>Product Details</h5>

                            <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>


                            <div className='productInfo mt-3'>
                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Brand</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-7'>
                                        <span > :  ectasy</span>
                                    </div>
                                </div>
                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Category</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-7'>
                                        <span > :  Man's</span>
                                    </div>
                                </div>
                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Tags</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-7'>
                                        <span >
                                            <ul className='list list-inline tags sml'>
                                                <li className='list-inline-item'></li>
                                                <span>: SUITE</span>
                                                <li className='list-inline-item'></li>
                                                <span>  PARTY</span>
                                                <li className='list-inline-item'></li>
                                                <span>  PARTY</span>
                                                <li className='list-inline-item'></li>
                                                <span> DRESS</span>
                                                <li className='list-inline-item'></li>
                                                <span> SMART</span>

                                            </ul>  </span>
                                    </div>
                                </div>
                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Color</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-7'>
                                        <span >
                                            <ul className='list list-inline tags sml'>
                                                <li className='list-inline-item'></li>
                                                <span>: RED</span>
                                                <li className='list-inline-item'></li>
                                                <span>  BLUE</span>
                                                <li className='list-inline-item'></li>
                                                <span>  WHITE </span>


                                            </ul>
                                        </span>
                                    </div>
                                </div>
                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Size</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-7'>
                                        <span > :  ectasy</span>
                                    </div>
                                </div>
                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Price</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-7'>
                                        <span > :  ectasy</span>
                                    </div>
                                </div>
                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Stock</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-7'>
                                        <span > :  ectasy</span>
                                    </div>
                                </div>
                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Review</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-7'>
                                        <span > :  ectasy</span>
                                    </div>
                                </div>

                                <div className='row mb-2'>


                                    <div className='col-sm-3 d-flex align-items-center'>
                                        <span className='icon'>< MdBrandingWatermark />
                                            <span className='name'>Published</span>
                                        </span>

                                    </div>


                                    <div className='col-sm-9'>
                                        <span >:  ectasy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='p-4'>

                    <h4 className='mt-4  '>  Product Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum,
                         corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime
                        doloremque laudantium magni neque ad quae
                        quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>
<h4 className='mt-4 mb-4'>Rating  Analysis</h4>
                        <div className='ratingSection'>
                            <div className='ratingrow d-flex align-items-center'>
                                <span className='col1'>
                                   5 star
                                </span>

                                <div className='col2'>
                                <div className="progress">
                                    <div className ="progress-bar" style={{width:'70%'}}></div>
                                </div>
                                </div>
                                <span className='col2'>
                                    (22)
                                    </span>
                            </div>
                            <div className='ratingrow d-flex align-items-center'>
                                <span className='col1'>
                                   5 star
                                </span>

                                <div className='col2'>
                                <div className="progress">
                                    <div className ="progress-bar" style={{width:'70%'}}></div>
                                </div>
                                </div>
                                <span className='col2'>
                                    (22)
                                    </span>
                            </div>
                            <div className='ratingrow d-flex align-items-center'>
                                <span className='col1'>
                                   4 star
                                </span>

                                <div className='col2'>
                                <div className="progress">
                                    <div className ="progress-bar" style={{width:'50%'}}></div>
                                </div>
                                </div>
                                <span className='col2'>
                                    (22)
                                    </span>
                            </div><div className='ratingrow d-flex align-items-center'>
                                <span className='col1'>
                                   3 star
                                </span>

                                <div className='col2'>
                                <div className="progress">
                                    <div className ="progress-bar" style={{width:'70%'}}></div>
                                </div>
                                </div>
                                <span className='col2'>
                                    (22)
                                    </span>
                            </div>
                            <div className='ratingrow d-flex align-items-center'>
                                <span className='col1'>
                                   2 star
                                </span>

                                <div className='col2'>
                                <div className="progress">
                                    <div className ="progress-bar" style={{width:'20%'}}></div>
                                </div>
                                </div>
                                <span className='col2'>
                                    (22)
                                    </span>
                            </div>
                            <div className='ratingrow d-flex align-items-center'>
                                <span className='col1'>
                                   5 star
                                </span>

                                <div className='col2'>
                                <div className="progress">
                                    <div className ="progress-bar" style={{width:'70%'}}></div>
                                </div>
                                </div>
                                <span className='col2'>
                                    (22)
                                    </span>
                            </div>
                            
                        </div>


                        <h4 className='mt-4 mb-4'>Customer Reviews</h4>
                        <div className='reviewsSection'>
                            <div className='reviewsRow '>
                                <div className='row'>
                                    <div className='col-sm-7 d-flex'>
                                        <div className='d-flex  flex-column'>

                                       
                                        <div className='userInfo d-flex  align-items-center mb-3'>
                                        < UserAvatarImgComponent img ={'https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} lg={true}/>
                                        <div className='info  pl-3'>
                                            <h5>lucky verma</h5>
                                            <span>35 mins ago</span>
                                        </div>
                                    </div> 
                                    <Rating name="read-only" value={4} size="small" precision={0.5} readOnly /> </div>

                                    
                                  
                                        </div>
                                        <div className='col-md-5 d-flex  align-items-center'>
                                        <div className='ml-auto'>
                                     <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply/> &nbsp;Reply</Button>
                                     </div>
                                   
                                        </div>
                                        <h5 className='mt-3'> pti ab illum est nihil, voluptate ex dignissimos! 
                                        Sit voluptatem dpti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem d</h5>
                                        
                                </div>

                            </div>
                            <div className='reviewsRow  reply'>
                                <div className='row'>
                                    <div className='col-sm-7 d-flex'>
                                        <div className='d-flex  flex-column'>

                                       
                                        <div className='userInfo d-flex  align-items-center mb-3'>
                                        < UserAvatarImgComponent img ={'https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} lg={true}/>
                                        <div className='info  pl-3'>
                                            <h5>lucky verma</h5>
                                            <span>35 mins ago</span>
                                        </div>
                                    </div> 
                                    < Rating name="read-only" value={4} size="small" precision={0.5} readOnly /> </div>
                                    

                                    
                                  
                                        </div>
                                        <div className='col-md-5 d-flex  align-items-center'>
                                        <div className='ml-auto'>
                                     <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply/> &nbsp;Reply</Button>
                                     </div>
                                   
                                        </div>
                                        <p className='mt-3'> pti ab illum est nihil, voluptate ex dignissimos! 
                                        Sit voluptatem dpti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem d</p>
                                        
                                </div>

                            </div>
                            <div className='reviewsRow  reply'>
                                <div className='row'>
                                    <div className='col-sm-7 d-flex'>
                                        <div className='d-flex  flex-column'>

                                       
                                        <div className='userInfo d-flex  align-items-center mb-3'>
                                        < UserAvatarImgComponent img ={'https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} lg={true}/>
                                        <div className='info  pl-3'>
                                            <h5>lucky verma</h5>
                                            <span>35 mins ago</span>
                                        </div>
                                    </div> 
                                    <Rating name="read-only" value={4} size="small" precision={0.5} readOnly /> </div>

                                    
                                  
                                        </div>
                                        <div className='col-md-5 d-flex  align-items-center'>
                                        <div className='ml-auto'>
                                     <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply/> &nbsp;Reply</Button>
                                     </div>
                                   
                                        </div>
                                        <p className='mt-3'> pti ab illum est nihil, voluptate ex dignissimos! 
                                        Sit voluptatem dpti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem d</p>
                                        
                                </div>

                            </div>
                            <div className='reviewsRow  reply'>
                                <div className='row'>
                                    <div className='col-sm-7 d-flex'>
                                        <div className='d-flex  flex-column'>

                                       
                                        <div className='userInfo d-flex  align-items-center mb-3'>
                                        < UserAvatarImgComponent img ={'https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} lg={true}/>
                                        <div className='info  pl-3'>
                                            <h5>lucky verma</h5>
                                            <span>35 mins ago</span>
                                        </div>
                                    </div> 
                                    <Rating name="read-only" value={4} size="small" precision={0.5} readOnly /> </div>

                                    
                                  
                                        </div>
                                        <div className='col-md-5 d-flex  align-items-center'>
                                        <div className='ml-auto'>
                                     <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply/> &nbsp;Reply</Button>
                                     </div>
                                   
                                        </div>
                                        <p className='mt-3'> pti ab illum est nihil, voluptate ex dignissimos! 
                                        Sit voluptatem dpti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem d</p>
                                        
                                </div>

                            </div>
                            <div className='reviewsRow  '>
                                <div className='row'>
                                    <div className='col-sm-7 d-flex'>
                                        <div className='d-flex  flex-column'>

                                       
                                        <div className='userInfo d-flex  align-items-center mb-3'>
                                        < UserAvatarImgComponent img ={'https://th.bing.com/th/id/OIP.pXL0MqW_4A1OgxUpNbngmAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} lg={true}/>
                                        <div className='info  pl-3'>
                                            <h5>lucky verma</h5>
                                            <span>35 mins ago</span>
                                        </div>
                                    </div> 
                                    <Rating name="read-only" value={4} size="small" precision={0.5} readOnly /> </div>

                                    
                                  
                                        </div>
                                        <div className='col-md-5 d-flex  align-items-center'>
                                        <div className='ml-auto'>
                                     <Button className='btn-blue btn-lg btn-big ml-auto'><FaReply/> &nbsp;Reply</Button>
                                     </div>
                                   
                                        </div>
                                        <p className='mt-3'> pti ab illum est nihil, voluptate ex dignissimos! 
                                        Sit voluptatem dpti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem d</p>
                                        
                                </div>

                            </div>
                        </div>

                        <h4 className='mt-4 mb-4'>Review reply</h4>
                        <form className='reviewForm'>
                            <textarea placeholder='write here...'></textarea>
                            <Button className='btn-big btn-blue btn-lg w-100 mt-4'>DROP YOUR REPLIES</Button>

                        </form>



                </div>



            </div>
        </div>


    );
};

export default ProductDetails;
