import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img10 from '../../assets/images/img10.webp';
import img11 from '../../assets/images/img11.jpg';
import img12 from '../../assets/images/img12.jpg';
import img13 from '../../assets/images/img13.jpg';
import img14 from '../../assets/images/img14.jpg';

const HomeCat = () => {
    return (
        <section className="homeCat">
            <div className="container">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide key="1">
                        <div className='item text-center'>
                            <img src={img10} alt="accessories" />
                            <h6>Accessories</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="2">
                        <div className='item text-center'>
                            <img src={img11} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="3">
                        <div className='item text-center'>
                            <img src={img12} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="4">
                        <div className='item text-center'>
                            <img src={img13} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="5">
                        <div className='item text-center'>
                            <img src={img14} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="6">
                        <div className='item text-center'>
                            <img src={img12} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="7">
                        <div className='item text-center'>
                            <img src={img11} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="8">
                        <div className='item text-center'>
                            <img src={img10} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="9">
                        <div className='item text-center'>
                            <img src={img10} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="10">
                        <div className='item text-center'>
                            <img src={img10} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="10">
                        <div className='item text-center'>
                            <img src={img10} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="10">
                        <div className='item text-center'>
                            <img src={img10} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="10">
                        <div className='item text-center'>
                            <img src={img10} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key="10">
                        <div className='item text-center'>
                            <img src={img10} alt="chicken" />
                            <h6>Chicken</h6>
                        </div>
                    </SwiperSlide>
                </Swiper>
     
            </div>
        </section>
    );
}

export default HomeCat;
