import React, { useContext, useState } from 'react'
import HomeBanner from "../../components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.png'
import img9 from '../../assets/images/img9.png'
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreenExit } from "react-icons/ai";


import { FaRegHeart } from "react-icons/fa6";
import { MyContext } from '../../App';

const HomeProduct = (props) => {
    const context = useContext(MyContext);
    
  const viewProduct=(id)=>{
    
    context.setisOpenProductModal(true);

  }
  
  console.log(props,"props")  
  return (
   <>
   <section className="homeProducts ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner1} className="cursor w-100"></img>

                                </div>


                                <div className="banner mt-5">
                                    <img src={banner2} className="cursor w-100"></img>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center mt-5">
                                <div className="info w--75">
                                    <h3 className="mb-0 hd text-left"><b>BEST SELLERS</b></h3>
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
                                        <div className={`productItems ${props.itemView}`}>
                                            <div className="imgWrapper">
                                                <img src={img1} className="w-100" />
                                                <span className="badge badge-primary">20%</span>
                                                <div className="actions">
                                                    <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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
                                        <div className={`productItems ${props.itemView}`}>
                                            <div className="imgWrapper">
                                                <img src={img2} className="w-100" />
                                                <span className="badge badge-primary">20%</span>
                                                <div className="actions">
                                                    <Button onClick={()=>viewProduct(2)}><AiOutlineFullscreenExit /></Button>
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
                                    <SwiperSlide><div className= {`productItems ${props.itemView}`}>
                                        <div className="imgWrapper">
                                            <img src={img3} className="w-100" />
                                            <span className="badge badge-primary">20%</span>
                                            <div className="actions">
                                                <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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
                                    <SwiperSlide><div className={`productItems ${props.itemView}`}>
                                        <div className="imgWrapper">
                                            <img src={img4} className="w-100" />
                                            <span className="badge badge-primary">20%</span>
                                            <div className="actions">
                                                <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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
                                                    <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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
                            <div className="d-flex align-items-center">
                                <div className="info w--75">
                                    <h3 className="mb-0 hd text-left"><b>NEW PRODUCTS</b></h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers,ending soon...</p>
                                </div>
                                <Button className="ViewAllBtn ml-auto">View All</Button>

                            </div>
                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={false}
                                    modules={[Navigation]}
                                    className="mySwiper">
                                    <SwiperSlide>
                                        <div className="item productItems">
                                            <div className="imgWrapper">
                                                <img src={img6} className="w-100" />
                                                <span className="badge badge-primary">20%</span>
                                                <div className="actions">
                                                    <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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
                                        <div className="item productItems">
                                            <div className="imgWrapper">
                                                <img src={img4} className="w-100" />
                                                <span className="badge badge-primary">20%</span>
                                                <div className="actions">
                                                    <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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
                                    <SwiperSlide><div className="item productItems">
                                        <div className="imgWrapper">
                                            <img src={img3} className="w-100" />
                                            <span className="badge badge-primary">20%</span>
                                            <div className="actions">
                                                <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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
                                    <SwiperSlide><div className="item productItems">
                                        <div className="imgWrapper">
                                            <img src={img9} className="w-100" />
                                            <span className="badge badge-primary">20%</span>
                                            <div className="actions">
                                                <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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
                                                    <Button onClick={()=>viewProduct(1)}><AiOutlineFullscreenExit /></Button>
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


                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner ">
                                    <img src={banner3} className="cursor w-100" />
                                </div>
                                <div className="banner ">
                                    <img src={banner4} className="cursor w-100" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
  

  
   </>
  )
}

export default HomeProduct