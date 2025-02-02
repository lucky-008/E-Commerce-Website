import { IoClose } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import React, { useRef } from 'react';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
const ProductModel = (props) => {
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();


    const settings = {
      dots: false,
      infinite: false,  
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      fade: false,
      arrows: true,
    };
  const settings2 = {
    dots: false,
    infinite: false,  
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const goto=(index)=> {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
    }

  return (
    <>
      <Dialog open={true} className="productModal" onClose={() => props.closeProductModal()}>
        <Button className='close_' onClick={() => props.closeProductModal()}><IoClose /></Button>
        <h4 className="mb-0">All natural italian style chicken meatballs</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>brands</span>
            <span className='ml-2'>welch's</span>
          </div>
          <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
        </div>
        <hr />
        <div className="row mt-2 productDetailsModal">
          <div className="col md-5">
            <div className="col-md-5">
              <div className="productZoom">
                <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                  <div className="item">
                    <InnerImageZoom zoomType="hover" zoomScale={1} src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"} />
                  </div>
                  <div className="item">
                    <InnerImageZoom zoomType="hover" zoomScale={1} src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"} />
                  </div>
                  <div className="item">
                    <InnerImageZoom zoomType="hover" zoomScale={1} src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"} />
                  </div>
                </Slider>
              </div>
              <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                  <div className="item">
                    <img src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"} className="w-100" onClick={()=>goto(1)} />
                    
                  </div>
                  <div className="item">
                    <img  src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"} className="w-100" onClick={()=>goto(2)} />
                    
                  </div>
                  <div className="item">
                    <img src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"} className="w-100" onClick={()=>goto(3)}/>
                    
                  </div>
                </Slider>


            </div>
            <div className="col md-7"></div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModel;
