import ProductZoom from "../../components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityDrop from "../../components/QuantityDrop";
import { Button } from "@mui/material";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import { MdCompareArrows } from "react-icons/md";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs,setActiveTabs] = useState(0);

    const isActive = (index) => {
        setActiveSize(index);
    }

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <ProductZoom />
                        </div>

                        <div className="col-md-7 pl-5">
                            <h2 className="hd text-capitalize">All Natural Italian Chicken Meatballs</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2">
                                            Brand
                                        </span>
                                        <span>Welch's</span>
                                    </div>
                                </li>
                                <li className="list-inline-item d-flex align-items-center">
                                    <Rating name="read-only" value={4} precision={0.5} readOnly size="small" />
                                    <span className="text-light cursor ml-2">
                                        1 Review
                                    </span>
                                </li>
                            </ul>
                            <div className="d-flex info">
                                <span className="oldPrice lg mr-2">$29.00</span>
                                <span className="netPrice text-danger lg">$56.00</span>
                            </div>
                            <span className="badge badge-success mr-2">
                                IN STOCK
                            </span>
                            <p className="mt-3">
                                fhdj ghfjdks tyrueiwo ghfjhtgbfhfhfhfjfjf fhfhhghtut gh fhfhhhhhhh rfjurfhfgtyhu ikjuhgtvfr ijuhygtfr ikjuhgtf
                                n fuvfhrjuy fjufhrbhfjudheghfjuhghjuyg jfhgrhfu
                            </p>

                            <div className="productSize d-flex align-items-center">
                                <span>Size/Weight:</span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item">
                                        <a
                                            className={`tag ${activeSize === 0 ? 'active' : ''}`}
                                            onClick={() => isActive(0)}
                                        >
                                            50g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className={`tag ${activeSize === 1 ? 'active' : ''}`}
                                            onClick={() => isActive(1)}
                                        >
                                            100g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className={`tag ${activeSize === 2 ? 'active' : ''}`}
                                            onClick={() => isActive(2)}
                                        >
                                            2000g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className={`tag ${activeSize === 3 ? 'active' : ''}`}
                                            onClick={() => isActive(3)}
                                        >
                                            500g
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className={`tag ${activeSize === 4 ? 'active' : ''}`}
                                            onClick={() => isActive(4)}
                                        >
                                            1000g
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center">
                                <QuantityDrop />

                                <div className="d-flex align-items-center mt-3">
                                    <Tooltip title="Add to cart" placement="top">
                                        <Button className="btn-blue btn-lg btn-big btn-round">
                                            Add to cart
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="Add to wishlist" placement="top">
                                        <Button className="btn-blue btn-lg btn-big btn-circle ml-5">
                                            <FaRegHeart />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="Add to compare" placement="top">
                                        <Button className="btn-blue btn-lg btn-big btn-circle ml-5">
                                            <MdCompareArrows />
                                        </Button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5 p-5 detailsPageTab">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button className={`tag ${activeTabs === 0 && 'active'}`}
                                        onClick={() => { setActiveTabs(0) }}
                                    >
                                        description </Button>


                                </li>
                                <li className="list-inline-item">
                                    <Button className={`tag ${activeTabs === 1 && 'active'}`}
                                        onClick={() => { setActiveTabs(1) }}
                                    >
                                        Adittional info </Button></li>
                                <li className="list-inline-item">
                                    <Button className={`tag ${activeTabs === 2 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(2)
                                            
                                        }}
                                    >reviews{3}
                                    </Button>
                                </li>
                            </ul>

                            {
                                activeTabs === 0 &&
                                <div className="tabContent">dfghjdfghjkl fghjkl; ertjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfjfjhik
                                g efghjjgjrutj djgigodjthfg dhfythfjfjhikg efghjjgjrutj djgigodjthfg dhfythfyujfjhikg efghjjgjrutj djgigodjthfg dhfythfbfbfbffjr
                                 </div>}
                            {
                                activeTabs === 1 && <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr class="stand-up">
                                                    <th>stand up</th>
                                                    <td>
                                                        <p>
                                                            35"L X 24"W X 37-45"H(front to back wheel)
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-wo-wheels">
                                                    <th>folded (w/o wheels)</th>
                                                    <td>
                                                        <p>
                                                            35"L X 24"W X 37-45"H(front to back wheel)
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-wheels">
                                                    <th>folded (w/ wheels)</th>
                                                    <td>
                                                        <p>
                                                            35"L X 24"W X 37-45"H(front to back wheel)
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>door pass through</th>
                                                    <td>
                                                        <p>
                                                            24
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>frame</th>
                                                    <td>
                                                        <p>
                                                            aluminium
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-wo wheels">
                                                    <th>weight (w/o wheels)</th>
                                                    <td>
                                                        <p>
                                                            24 LBS
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-capacity">
                                                    <th>wight capacity</th>
                                                    <td>
                                                        <p>
                                                            24 LBS
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="handle-height-ground-to-handle">
                                                    <th>handle height(ground to handle)</th>
                                                    <td>
                                                        <p>
                                                            37-45"
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="wheels">
                                                    <th>wheels</th>
                                                    <td>
                                                        <p>
                                                            12" air wide trcks
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="seat-back-height">
                                                    <th>seat back height</th>
                                                    <td>
                                                        <p>
                                                            24"
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="head-room-inside-canopy">
                                                    <th>head room (inside canopy)</th>
                                                    <td>
                                                        <p>
                                                            24"
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_color">
                                                    <th>color</th>
                                                    <td>
                                                        <p>
                                                            black blue white red
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_size">
                                                    <th>size</th>
                                                    <td>
                                                        <p>
                                                            M, S
                                                        </p>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>




                            }
                            {
                                activeTabs === 2 &&
                                <div className="tabContent">

                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3> custome questions and answers</h3>
                                            <br />
                                            <div className=" card p-4 reviewsCard flex-row" >
                                                            <div className="image">

                                                                <div className="rounded-circle">

                                                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />

                                                                </div>
                                                                
                                                                <span className=" text-g d-block text-center font-weight-bold">lucky verma</span>
                                                            </div>
                                                            <div className="info pl-5">
                                                                <div className=" d-flex align-items-center">
                                                                    <h5 className="text-light">01/01/2025</h5>
                                                                    <div className="ml-auto">
                                                                        <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly />
                                                                    </div>
                                                                </div>
                                                                <p>asdfghjklxcvbnm, wertyuiop cvbnm fghjkl; oiy jjn ubvcsrtyui
                                                                    dfbnm, wertyuiop cvbnm fghjkl; oiy jjn ubvcsrtyui
                                                                    bnm, wertyuiop cvbnm fghjkl; oiy jjn ubvcsrtyui
                                                                    bnm, wertyuiop cvbnm fghjkl; oiy jjn ubvcsrtyuik hh j jgftyui i </p>
                                                            </div>


                                                        </div>
                                                    
                                            <br className="res-hide" />
                                            <br className="res-hide" />

                                            <form className="reviewForm" >



                                                <h4>Add a review </h4><br />
                                                <div className="form-group">
                                                    <textarea className="form-control" name="review" >
                                                        
                                                    

                                                    </textarea>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type= "text"  className="form-control" placeholder="Name" name="userName" 
                                                        />
                                                    
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating name="rating" value={4.5} precision={0.5} />
                                                        </div>
                                                    </div>

                                                </div>

                                                <br />
                                                <div className="form-group">
                                                    <Button type="submit" className="btn-blue btn-lg btn-big btn-round">submit a review</Button>
                                                </div>
                                            </form>



                                        </div>


                                        <div className="col-md-4 pl-5 reviewBox">
                                            <h4>customer reviews</h4>
                                            <div className="d-flex align-items-center mt-2">
                                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                <strong className="ml-3"> 4.8 out of 5</strong>
                                                </div>


                                                <div className="progressBarBox d-flex align-items-center">
                                                    <span className="mr-3">  1 star</span>
                                                    <div className="progress" style={{width :'85%', height: '20px'}}>
                                                    <div class= "progress-bar bg-success" style={{width :'85%', height: '20px'}}></div>


                                                    </div>
                                                </div>
                                                <div className="progressBarBox d-flex align-items-center">
                                                    <span className="mr-3">  1 star</span>
                                                    <div className="progress" style={{width :'85%', height: '20px'}}>
                                                    <div class= "progress-bar bg-success" style={{width :'85%', height: '20px'}}></div>


                                                    </div>
                                                </div>
                                                <div className="progressBarBox d-flex align-items-center">
                                                    <span className="mr-3">  1 star</span>
                                                    <div className="progress" style={{width :'85%', height: '20px'}}>
                                                    <div class= "progress-bar bg-success" style={{width :'85%', height: '20px'}}></div>


                                                    </div>
                                                </div>
                                                <div className="progressBarBox d-flex align-items-center">
                                                    <span className="mr-3">  1 star</span>
                                                    <div className="progress" style={{width :'85%', height: '20px'}}>
                                                    <div class= "progress-bar bg-success" style={{width :'85%', height: '20px'}}></div>


                                                    </div>
                                                </div>


                                        </div>

                                    </div>
                                </div>





                            }



                        </div>
                    </div>


                    < br />
                    <RelatedProducts/>



                </div>
            </section>
        </>
    )
}

export default ProductDetails;
