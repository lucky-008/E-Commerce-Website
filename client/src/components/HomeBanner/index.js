import React from "react";
import Slider from "react-slick";
import Bag from '../../assets/images/bag.avif'
import Perfume from '../../assets/images/perfume.avif'
import Watch from '../../assets/images/watch.avif'
import Cloth from '../../assets/images/cloth.avif'


const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
        
    };
    return (
        <div className="container">

         <div className="homeBannerSection">
            <Slider {...settings}>
            <div className="item">
                    <div className="banner">
                    <img src={Cloth} className="w-100">
                    </img>
                    </div>
                </div>
              
                <div className="item">
                    <img src={Bag} className="w-100">
                    </img>
                </div>

                <div className="item">
                    <img src={Perfume} className="w-100">
                    </img>
                </div>
                <div className="item">
                    <img src={Watch} className="w-100">
                    </img>
                </div>
       
        </Slider >
        </div> 
        </div>
      

    )
}
export default HomeBanner;
