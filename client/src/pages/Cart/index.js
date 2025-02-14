import { Link } from 'react-router-dom';
import img1 from '../../assets/images/img1.jpg'
import { Button, Rating } from '@mui/material';
import QuantityDrop from '../../components/QuantityDrop';
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
    return (
        <>

            <section className="section cartPage">
                <div className="container">

                <h2 className="hd mb-1">YOUR CART</h2>
                    <p>There is <b className='text-red'>3</b> item in yout cart</p>

                    <div className="row">
                        <div className="col-md-9 pr-5">
                       


                    <div className="table-responsive">


                        <table className="table">
                            <thead>
                                <tr>
                                    <th width ="35%">Product</th>
                                    <th width="15%">Unit Price</th>
                                    <th width="25% ">Quantity</th>
                                    <th width="15%">Sub Total</th>
                                    <th width="10%">Remove</th>
                                </tr>
                            </thead>
                       
                        <tbody>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center  cartItemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src={img1} className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6> roast chao cheese creamy original</h6>
                                            <Rating  name='read-only' value={4} readOnly precision={0.5} size='small' />
                                        </div>
                                    </div>
                                    </Link>
                                </td>

                                <td width ="15%%">$78.9</td>

                                <td width ="25%"><QuantityDrop/></td>

                                <td width ="15%">$78.9</td>

                                <td width ="10%"><span className='remove'><IoClose/></span></td>
                            </tr>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center  cartItemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src={img1} className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6> roast chao cheese creamy original</h6>
                                            <Rating  name='read-only' value={4} readOnly precision={0.5} size='small' />
                                        </div>
                                    </div>
                                    </Link>
                                </td>

                                <td width ="15%%">$78.9</td>

                                <td width ="25%"><QuantityDrop/></td>

                                <td width ="15%">$78.9</td>

                                <td width ="10%"><span className='remove'><IoClose/></span></td>
                            </tr>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center  cartItemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src={img1} className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6> roast chao cheese creamy original</h6>
                                            <Rating  name='read-only' value={4} readOnly precision={0.5} size='small' />
                                        </div>
                                    </div>
                                    </Link>
                                </td>

                                <td width ="15%%">$78.9</td>

                                <td width ="25%"><QuantityDrop/></td>

                                <td width ="15%">$78.9</td>

                                <td width ="10%"><span className='remove'><IoClose/></span></td>
                            </tr>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center  cartItemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src={img1} className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6> roast chao cheese creamy original</h6>
                                            <Rating  name='read-only' value={4} readOnly precision={0.5} size='small' />
                                        </div>
                                    </div>
                                    </Link>
                                </td>

                                <td width ="15%%">$78.9</td>

                                <td width ="25%"><QuantityDrop/></td>

                                <td width ="15%">$78.9</td>

                                <td width ="10%"><span className='remove'><IoClose/></span></td>
                            </tr>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center  cartItemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src={img1} className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6> roast chao cheese creamy original</h6>
                                            <Rating  name='read-only' value={4} readOnly precision={0.5} size='small' />
                                        </div>
                                    </div>
                                    </Link>
                                </td>

                                <td width ="15%%">$78.9</td>

                                <td width ="25%"><QuantityDrop/></td>

                                <td width ="15%">$78.9</td>

                                <td width ="10%"><span className='remove'><IoClose/></span></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>


                        </div>
                        <div className="col-md-3">
                            <div className='card  shadow p-1 cartDetails'>


                                <h3>CART TOTALS</h3>
                                < div className=' d-flex align-items-center mb-3'>
                                <span>Subtotal</span>
                                <span className='ml-auto text-red font-weight-bold' >$12.32</span>
                                    </div>
                                    < div className=' d-flex align-items-center mb-3'>
                                <span>Shipping</span>
                                <span className='ml-auto'> <b>Free</b></span>
                                    </div>
                                    < div className=' d-flex align-items-center mb-3'>
                                <span>Estimate for</span>
                                <span className='ml-auto '><b>United Kingdom</b></span>
                                    </div>
                                    < div className=' d-flex align-items-center mb-3'>
                                <span>Total</span>
                                <span className='ml-auto text-red font-weight-bold'>$12.32</span>

                                    </div>
                                    <br/>
                                    <Button className='btn-blue bg-red btn-lg btn-big'><MdOutlineShoppingCart/>add to cart</Button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}
export default Cart;