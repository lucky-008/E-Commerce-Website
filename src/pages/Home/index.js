import HomeBanner from "../../components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import coupon from "../../assets/images/coupon.png";
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
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import HomeCat from "../../components/HomeCat";
import { CiMail } from "react-icons/ci";
import HomeProduct from "../../components/HomeProduct";


const Home = () => {
    return (
        <>
            <HomeBanner />
            < HomeCat />
            <HomeProduct/>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h3 className="text-white">join our newsletter and get..</h3>
                            <p className="text-light">join our email subscription now to get uodates on promotions and coupons</p>

                            <form>
                                <CiMail />
                                <input type="text" placeholder="Your email address" />
                                <Button>subscribe</Button>
                            </form>

                        </div>
                        <div className="col-md-6">
                            <img src={coupon} />

                        </div>
                    </div>
                </div>
            </section>
            

        </>
    )
}


export default Home;