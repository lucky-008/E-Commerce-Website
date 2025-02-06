import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.jpg'
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";



const RelatedProducts =()=>{
return(

    <>
      <div className="d-flex align-items-center mt-5">
                                <div className="info w--75">
                                    <h3 className="mb-0 hd text-left"><b>RELATED PRODUCTS</b></h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers,ending soon...</p>
                                </div>
                                <Button className="ViewAllBtn ml-auto">View All</Button>

                            </div>
                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    navigation={true}
                                    slidesPerGroup={1}
                                    modules={[Navigation]}
                                    className="mySwiper">
                                    <SwiperSlide>
                                        <div className={'productItems'}>
                                            <div className="imgWrapper">
                                                <img src={img1} className="w-100" />
                                                <span className="badge badge-primary">20%</span>
                                                <div className="actions">
                                                    <Button><AiOutlineFullscreenExit /></Button>
                                                    <Button><FaRegHeart /></Button>
                                                </div>
                                            </div>
                                            <div className="info ">
                                                <h5 className="text-left">trending men clothing</h5>
                                                <span className="text-sucess text-left d-block">in stock</span>
                                                <div className="text-left"><Rating name="read-only mt-2 mb-2" value={4.5} readOnly size="small" precision={0.5} /></div>
                                                <div className="d-flex">
                                                    <span className="oldPrice">$20.00 </span>
                                                    <span className="netPrice text-danger ml-2">$14.00 </span>

                                                </div>
                                            </div>

                                        </div></SwiperSlide>
                                    <SwiperSlide>
                                        <div className={'productItems'} >
                                            <div className="imgWrapper">
                                                <img src={img2} className="w-100" />
                                                <span className="badge badge-primary">20%</span>
                                                <div className="actions">
                                                    <Button><AiOutlineFullscreenExit /></Button>
                                                    <Button><FaRegHeart /></Button>
                                                </div>
                                            </div>
                                            <div className="info ">
                                                <h5 className="text-left">trending women clothing</h5>
                                                <span className="text-sucess text-left d-block">in stock</span>
                                                <div className="text-left"><Rating name="read-only mt-2 mb-2" value={4.5} readOnly size="small" precision={0.5} /></div>
                                                <div className="d-flex">
                                                    <span className="oldPrice">$25.00 </span>
                                                    <span className="netPrice text-danger ml-2">$20.00 </span>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide><div className= {'productItems'}>
                                        <div className="imgWrapper">
                                            <img src={img3} className="w-100" />
                                            <span className="badge badge-primary">20%</span>
                                            <div className="actions">
                                                <Button><AiOutlineFullscreenExit /></Button>
                                                <Button><FaRegHeart /></Button>
                                            </div>
                                        </div>
                                        <div className="info ">
                                            <h5 className="text-left">trending women clothing</h5>
                                            <span className="text-sucess text-left d-block">in stock</span>
                                            <div className="text-left"><Rating name="read-only mt-2 mb-2" value={4.5} readOnly size="small" precision={0.5} /></div>
                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00 </span>
                                                <span className="netPrice text-danger ml-2">$14.00 </span>
                                            </div>
                                        </div>

                                    </div></SwiperSlide>
                                    <SwiperSlide><div className={'productItems'}>
                                        <div className="imgWrapper">
                                            <img src={img4} className="w-100" />
                                            <span className="badge badge-primary">20%</span>
                                            <div className="actions">
                                                <Button><AiOutlineFullscreenExit /></Button>
                                                <Button><FaRegHeart /></Button>
                                            </div>
                                        </div>
                                        <div className="info ">
                                            <h5 className="text-left">trending  clothing</h5>
                                            <span className="text-sucess text-left d-block">in stock</span>
                                            <div className="text-left"><Rating name="read-only mt-2 mb-2" value={4.5} readOnly size="small" precision={0.5} /></div>
                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00 </span>

                                                <span className="netPrice text-danger ml-2">$14.00 </span>
                                            </div>
                                        </div>

                                    </div></SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productItems">
                                            <div className="imgWrapper">
                                                <img src={img1} className="w-100" />
                                                <span className="badge badge-primary">20%</span>
                                                <div className="actions">
                                                    <Button><AiOutlineFullscreenExit /></Button>
                                                    <Button><FaRegHeart /></Button>
                                                </div>

                                            </div>
                                            <div className="info ">
                                                <h5 className="text-left">trending men clothing</h5>
                                                <span className="text-sucess text-left d-block">in stock</span>
                                                <div className="text-left"><Rating name="read-only mt-2 mb-2" value={4.5} readOnly size="small" precision={0.5} /></div>
                                                <div className="d-flex">
                                                    <span className="oldPrice">$20.00 </span>
                                                    <span className="netPrice text-danger ml-2">$14.00 </span>
                                                </div>
                                            </div>

                                        </div></SwiperSlide>


                                </Swiper>
                            </div>
    
    </>
)
}
export default RelatedProducts;