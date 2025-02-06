import { IoClose } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import React, { useContext, useRef, useState } from 'react';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import QuantityDrop from "../QuantityDrop";
import { FaRegHeart } from "react-icons/fa";  // Correct import
import { MdCompareArrows } from "react-icons/md";  // Correct import
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";



const ProductModel = (props) => {
   
    const context = useContext(MyContext);

  

   

    return (
      <>
      <Dialog open={true} className="productModal" onClose={() => context.setisOpenProductModal(false)}>
        <Button className='close_' onClick={() => context.setisOpenProductModal(false)}>
          <IoClose />
        </Button>
        <h4 className="mb-0">All natural Italian-style chicken meatballs</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brand</span>
            <span className='ml-2'>Welch's</span>
          </div>
          <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
        </div>
        <hr />
        <div className="row mt-2 productDetailsModal">         
          <div className="col-md-5">

      <ProductZoom/>
           
          </div>
          
          <div className="col-md-7 text-left">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$6.78</span>
              <span className="netPrice text-danger lg">$8.90</span>
            </div>
            <span className="badge bg-success mr-2">IN STOCK</span>
            <p className="mt-3">gfhbhhiugf kjhgfdxch kfdcvb iuytrd kiuyfhjkuy kiuytfdfghj kiuytrsdfghjk lkjhgfdsxcvbnm bvcsdtyuio oiuytrdghn</p>
            <div className="d-flex align-items-center">
              <QuantityDrop />
              <Button className="btn-blue btn-lg btn-big btn-round ">Add to Cart</Button>
            </div>
            <div className="d-flex align-items-center mt-3 actions">
              <Button className="btn-round btn-sml" variant="outlined"><FaRegHeart /> Add to Wishlist</Button>
              <Button className="btn-round btn-sml ml-3" variant="outlined"><MdCompareArrows /> Compare</Button>
            </div>
          </div>
          
        </div>
      </Dialog>
      </>
    
  );
};

export default ProductModel;
