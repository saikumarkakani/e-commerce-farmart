import { BsArrowDownSquare, BsArrowRepeat, BsArrowsFullscreen, BsCart, BsCurrencyRupee, BsDash, BsEnvelope, BsFacebook, BsGeoAlt, BsHeart, BsLinkedin, BsPinterest, BsPlus, BsRepeat, BsShop, BsStar, BsStarFill, BsStarHalf, BsTelephone, BsTwitter, BsYoutube } from 'react-icons/bs';
import '../Special-Price/specialprice.component.css';
import { useEffect, useState } from 'react';
import { FeaturedPro } from '../../Body/FeatureProducts/featurePro.component';
import { Faq } from '../Faq/faq.component';



export function SpecialPrice() {


    const [products, setProducts] = useState([]);

    function incrementQuantity(item, index) {
        let data = JSON.parse(JSON.stringify(products));
        data[index].Quantity = item.Quantity + 1;
        setProducts(data);
    };
    // decrement quantity function
    function decrementQuantity(item, index) {
        if (item.Quantity > 1) {
            let data = JSON.parse(JSON.stringify(products));
            data[index].Quantity = item.Quantity - 1;
            setProducts(data);
        }
    }
    return (
        <>
            <div className='descp' style={{ marginTop: "5px" }}>
                <div className='store-H-bg'>
                    <label className='store-H-text'>Home</label>/
                    <label style={{ color: "blue", margin: "6px" }}>products</label>/
                    <label style={{ color: "blue", margin: "6px" }}>Wines & Alcoholic drinks</label>/
                    <label style={{ margin: "6px" }}>Beat Headphone</label>
                </div>


                <div className='row'>


                    <div className='col-5'>
                        <a href="#"><img className="sml-cmera" data-src="https://farmart.botble.com/storage/products/3-150x150.jpg" src="https://farmart.botble.com/storage/products/3-150x150.jpg" alt="Beat Headphone" data-ll-status="loaded"></img></a>
                        <br></br>
                        <a href="#"><img className="bg-cmera" src="https://farmart.botble.com/storage/products/3.jpg" alt="Beat Headphone" ></img></a>
                      
                    </div>
                   

                    <div className='col-4'>
                        <h3 className='mt-5'>Beat Headphone</h3>&nbsp;&nbsp;
                        <label>Brand:&nbsp;&nbsp;<a className='btn-link'> Soda Brand</a></label>
                        <label> <BsStarFill style={{ color: 'orange', marginLeft: "10px" }}></BsStarFill>
                            <BsStarFill style={{ color: 'orange' }}></BsStarFill>
                            <BsStarFill style={{ color: 'orange' }}></BsStarFill>
                            <BsStarHalf style={{ color: 'orange' }}></BsStarHalf>
                            <BsStar></BsStar></label> <label>(18)</label>

                        <hr></hr>

                        <h3 style={{ color: "green" }}>$5000</h3>&nbsp;
                        <p>Sold By:&nbsp; <a style={{ color: 'blue' }} href='#'>&nbsp;YOUNG SHOP</a></p>

                        <ul>
                            <li>Unrestrained and portable active stereo speaker</li>
                            <li>Free from the confines of wires and chords</li>
                            <li>20 hours of portable capabilities</li>
                            <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                            <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                        </ul>
                        <br></br>
                        <span className='d-flex Avlblty'>
                            <label className=' PAstyle'>Availability:<span style={{ color: 'green' }}>10 products Available</span></label>
                        </span>
                        <br></br>

                        <span className='mt-3'>
                            <h5>Color:</h5>
                            <label class="circle black"></label>
                            <label class="circle red"></label>
                            <label class="circle green"></label>
                        </span>
                        <br></br>

                        <span className='mt-3'>
                            <br></br>
                            <h5>Size:</h5>
                            <button className='sml'>S</button>
                            <button className='sml'>M</button>
                            <button className='sml'>L</button>
                        
                            <p style={{marginLeft:"20px", color:"green", fontWeight:"bold",marginTop:"20px"}}>In Stock</p>
                        </span>


                        <h3>Quantity:</h3>
                        <span className='d-flex'>


                            <div className="display-flex1">

                                <a href='#'><span><BsDash></BsDash></span></a>
                                <span>1</span>
                                <a href='#'><span><BsPlus></BsPlus></span></a>
                            </div>



                            <div>

                                <button className="Update-cart2"><BsCart></BsCart> Add to cart</button>
                            </div>

                            <div>
                                <button className="Update-cart1"> Buy Now</button>

                            </div>

                        </span>

                        <div>
                            <span><BsHeart></BsHeart> Wishlist </span> &nbsp;&nbsp;
                            <span> <BsArrowRepeat></BsArrowRepeat> Compare</span>
                        </div>
                        <hr></hr>

                        <div>
                            <p>SKU: 7F-159-A0-A1</p>
                            <p>Categories: <a style={{ color: 'blue' }} href='#'>Cereal Bars, Olives, Lunch & Veg Pots, Lunch Salad Bowls</a></p>
                            <p>Tags: <a style={{ color: 'blue' }} href='#'>Iphone, Printer, Office</a></p>
                        </div>

                        <div>
                            <button className='fb' data-bs-toggle="tooltip" title="facebook"><BsFacebook></BsFacebook> Facebook</button>
                            <button className='fb fb1' data-bs-toggle="tooltip" title="Twitter"><BsTwitter></BsTwitter> Twitter</button>
                            <button className='fb fb2' data-bs-toggle="tooltip" title="Pinterest"><BsPinterest></BsPinterest> Pinterest</button>
                            <button className='fb fb3' data-bs-toggle="tooltip" title="LinkedIn"><BsLinkedin></BsLinkedin> LinkedIn</button>
                        </div>

                    </div>

                    <div className='col-3 '>
                        <div className='htlne bg-Sprow'>
                            <img class="lazyload entered loaded" data-src="https://farmart.botble.com/storage/general/icon-rocket.png" alt="Free Shipping" data-ll-status="loaded" src="https://farmart.botble.com/storage/general/icon-rocket.png"></img>
                            <label className='sptext'>Free Shipping</label>
                            <p className='Sp-Stext'>For all orders over $200</p>
<hr></hr>

                            <img class="lazyload entered loaded" data-src="https://farmart.botble.com/storage/general/icon-reload.png" alt="1 &amp; 1 Returns" data-ll-status="loaded" src="https://farmart.botble.com/storage/general/icon-reload.png"></img>
                            <label className='sptext'>1 & 1 Returns</label>
                            <p className='Sp-Stext'>Cancellation after 1 day</p>

<hr></hr>

                            <img class="lazyload entered loaded" data-src="https://farmart.botble.com/storage/general/icon-protect.png" alt="100% Secure Payment" data-ll-status="loaded" src="https://farmart.botble.com/storage/general/icon-protect.png"></img>
                            <label className='sptext'>100% Secure Payment</label>
                            <p className='Sp-Stext'>Guarantee secure payments</p>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='bg-Sprow1'>
                            <label className='sptext'>Hotline Order:</label>
                            <p>Mon - Fri: 07AM - 06PM</p>
                            <label><strong>(+965) 7989255561</strong></label>

                            <p >Become a Vendor?<a style={{ color: 'orange',marginLeft:"5px" }} href='#'>Register Now</a></p>
                        </div>
                    </div>


                </div>

                <div className='row'>
                    <div className='col-12 empty'>
                 

                    </div>
                </div>


                {/* Related products */}


                <div className='row'>
                    <FeaturedPro></FeaturedPro>
                </div>
                <hr></hr>
            </div>
        </>
    )
}


