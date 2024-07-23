import '../Product-Category/products.component.css';
import productimg1 from '../../../../assets/productimg1.png';
import { BsList } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import saver1 from '../../../../assets/jl1.jpg';
import saver2 from '../../../../assets/fp1.jpg';
import saver3 from '../../../../assets/jl-2.jpg';
import saver4 from '../../../../assets/saver7.jpg';
import saver5 from '../../../../assets/saver8.jpg';
import saver6 from '../../../../assets/saver9.jpg';
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiRepeat } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';




export function ProductsCate() {
    //for left side menu popup
    const [openPopup, setopenPopup] = useState(false);
    const [openPopups, setopenPopups] = useState(false);
    const [vegopenPopups, setvegopenPopups] = useState(false);


    //for left side menu popup
    const ShowPopup = () => {
        setopenPopup(!openPopup);
    };
    const ShowPopups = () => {
        setopenPopups(!openPopups);
    };
    const vegShowPopup = () => {
        setvegopenPopups(!vegopenPopups);
    };



    return (
        <div>
            <div className='productimg-backg' >
                <img src={productimg1}></img>
            </div>
            <div>
                <div>
                    <label className='productCate-text'>Potatoes</label>
                    <label className='product-smalltext'>Sort By</label>
                    <label>
                        <select className='pro-option'>

                            <option>Default</option>
                            <option>Oldest</option>
                            <option>Newest</option>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                            <option>Name: A-Z</option>
                            <option>Name: Z-A</option>
                            <option>Rating: low to high</option>
                            <option>Rating: high to low</option>
                        </select>
                        <label className='product-smalltext1'>View</label>
                        <label><LuLayoutGrid className='pro-icon1' />
                        </label>
                        <label><BsList className='pro-icon2' /></label>
                        <label></label>
                    </label>
                </div>
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-4 pro-col-4gap">
                                <div className='pro-box1' style={{ height: 'auto' }}>
                                    <div className='pro-box-text'>PRODUCT CATEGORIES</div>
                                    <div>
                                        <ul>
                                            <li className='pro-box-text-small1'> <CiStar style={{ height: "25px", width: "25px" }} />&nbsp;&nbsp;fruits & vegitables <FaPlus style={{ marginLeft: "30px" }} onClick={ShowPopup} />

                                                {openPopup && (
                                                    <div>

                                                        <div style={{ marginLeft: "20px" }}>
                                                            <div style={{ marginLeft: "10px" }}>fruits <FaPlus style={{ marginLeft: "90px" }} onClick={ShowPopups} />
                                                                {
                                                                    openPopups && (
                                                                        <div>
                                                                            <div className='pro-box1-subtext'>Apples</div>
                                                                            <div className='pro-box1-subtext'> Bananas</div>
                                                                            <div className='pro-box1-subtext'> Berries</div>
                                                                            <div className='pro-box1-subtext'> Oranges & Easy Peelers</div>
                                                                            <div className='pro-box1-subtext'>Grapes</div>
                                                                            <div className='pro-box1-subtext'>Lemons & Limes</div>
                                                                            <div className='pro-box1-subtext'>Peaches & Nectarines</div>
                                                                            <div className='pro-box1-subtext'>Pears</div>
                                                                            <div className='pro-box1-subtext'>Melon</div>
                                                                            <div className='pro-box1-subtext'>Avocados</div>
                                                                            <div className='pro-box1-subtext'>Plums & Apricots</div>
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>

                                                            <div style={{ marginLeft: "8px" }} >vegitables <FaPlus style={{ marginLeft: "60px" }} onClick={vegShowPopup} />
                                                                {
                                                                    vegopenPopups && (
                                                                        <div>
                                                                            <div className='pro-box1-subtext'>Apples</div>
                                                                            <div className='pro-box1-subtext'> Potatoes</div>
                                                                            <div className='pro-box1-subtext'> Carrots & Root Vegetables</div>
                                                                            <div className='pro-box1-subtext'>Broccoli & Cauliflower</div>
                                                                            <div className='pro-box1-subtext'>Cabbage, Spinach & Greens</div>
                                                                        </div>

                                                                    )
                                                                }

                                                            </div>

                                                        </div>
                                                    </div>
                                                )}




                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <div className='pro-box2'>
                                    <div className='pro-box-text'>BRANDS</div>
                                    <div>
                                        <ul>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; FoodPound <label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(9)</label> </li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; iTea JSC <label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(14)</label></li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; Soda Brand<label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(10)</label></li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; Farmart <label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(6)</label></li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; Soda Brand <label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(22)</label></li>

                                        </ul>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <div className='pro-box2'>
                                    <div className='pro-box-text'>TAGS</div>
                                    <div>
                                        <ul>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; Electronic<label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(9)</label> </li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; Office <label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(14)</label></li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; Iphone<label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(10)</label></li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; Mobile<label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(6)</label></li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; IT <label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(22)</label></li>
                                            <li className='pro-box-text-small'> <input type="checkbox"></input> &nbsp;&nbsp; Printer <label style={{ fontSize: "16px", fontWeight: "500", color: " rgb(170, 174, 178)" }}>(22)</label></li>


                                        </ul>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <div className='pro-box3'>
                                    <div className='pro-box-text'>Price</div>
                                    <div>
                                        <input type="range" className='price-range'></input>
                                        <div style={{ marginLeft: "30px" }}>$ 250 &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;$3006</div>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </div>
                                    <hr></hr>
                                    <div className='pro-box-text'>BY COLOR</div>
                                    <br></br>

                                    <div>
                                        <label class="circle black"></label>
                                        <label class="circle red"></label>
                                        <label class="circle green"></label>
                                        <label class="circle blue"></label>
                                        <label class="circle yellow"></label>
                                    </div>
                                    <br></br>
                                    <hr></hr>
                                    <div className='pro-box-text'>BY WEIGHT</div>
                                    <br></br>

                                    <div >
                                        <label className='size-box'>1KG</label>
                                        <label className='size-box'>2KG</label>
                                        <label className='size-box'>3KG</label>
                                        <label className='size-box'>4KG</label>
                                        <label className='size-box'>5KG</label>
                                    </div>
                                    <br></br>
                                    <hr></hr>
                                    <div className='pro-box-text'>BY SIZE</div>
                                    <br></br>

                                    <div >
                                        <label className='size-box1'>S</label>
                                        <label className='size-box1'>M</label>
                                        <label className='size-box1'>L</label>
                                        <label className='size-box1'>XL</label>
                                        <label className='size-box1'>XXL</label>
                                    </div>
                                    <br></br>
                                    <hr></hr>
                                    <div className='pro-box-text'>BY BOXES</div>
                                    <br></br>

                                    <div >
                                        <label className='size-box2'>1 Box</label>
                                        <label className='size-box2'>2 Boxes</label>
                                        <label className='size-box2'>3 Boxes</label>
                                        <label className='size-box2'>4 Boxes</label>
                                        <label className='size-box2'>5 Boxes</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8 col-product">
                                <div>
                                    <div>

                                        <div>
                                            <div class="row" style={{ marginLeft: "10px", width: "1000px" }}>
                                                <div class="col product-col">

                                                    <div>
                                                        <img src={saver1} className='product-img'></img>

                                                    </div>
                                                    <div className='product-text'>Roberts Stores</div>
                                                    <div className='product-text1'>Red & Black Headphone (Degital)</div>
                                                    <div style={{ marginLeft: "20px" }}>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                                        <span>(7)</span>
                                                    </div>
                                                    <div>
                                                        <label className='product-priceG'>$280.10</label>
                                                    </div>
                                                    <div class="rating-line"></div>
                                                    <div className='sold-style'> Sold: 4/12</div>
                                                    <div class="product-submenu" style={{ borderTop: "none" }}>
                                                        <div>
                                                            <div className='plussymbols'>
                                                                <label>
                                                                    <FaMinus />
                                                                </label>
                                                                <span style={{ padding: "20px" }}>0</span>
                                                                <label>
                                                                    <GoPlus />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <button className='product-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                                        </div>
                                                    </div>
                                                    <div class="hover-submenu">

                                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                                        <div><CiRepeat className='col-logo2' /></div>
                                                    </div>

                                                </div>
                                                <div class="col product-col">
                                                    <div>
                                                        <img src={saver2} className='product-img'></img>
                                                    </div>
                                                    <div className='product-text'>Roberts Stores</div>
                                                    <div className='product-text1'>Red & Black Headphone (Degital)</div>
                                                    <div style={{ marginLeft: "20px" }}>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                                        <span>(7)</span>
                                                    </div>
                                                    <div>
                                                        <label className='product-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                                                    </div>
                                                    <div class="rating-line"></div>
                                                    <div className='sold-style'> Sold: 4/12</div>
                                                    <div class="product-submenu" style={{ borderTop: "none" }}
                                                    >
                                                        <div>
                                                            <div className='plussymbols'>
                                                                <label>
                                                                    <FaMinus />
                                                                </label>
                                                                <span style={{ padding: "20px" }}>0</span>
                                                                <label>
                                                                    <GoPlus />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <button className='product-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                                        </div>
                                                    </div>
                                                    <div class="hover-submenu">

                                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                                        <div><CiRepeat className='col-logo2' /></div>
                                                    </div>
                                                </div>
                                                <div class="col product-col">
                                                    <div>
                                                        <img src={saver3} className='product-img'></img>
                                                    </div>
                                                    <div className='product-text'>Roberts Stores</div>
                                                    <div className='product-text1'>Red & Black Headphone (Degital)</div>
                                                    <div style={{ marginLeft: "20px" }}>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                                        <span>(7)</span>
                                                    </div>
                                                    <div>
                                                        <label className='product-priceG'>$280.10</label>
                                                    </div>
                                                    <div class="rating-line"></div>
                                                    <div className='sold-style'> Sold: 4/12</div>
                                                    <div class="product-submenu" style={{ borderTop: "none" }}>
                                                        <div>
                                                            <div className='plussymbols'>
                                                                <label>
                                                                    <FaMinus />
                                                                </label>
                                                                <span style={{ padding: "20px" }}>0</span>
                                                                <label>
                                                                    <GoPlus />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <button className='product-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                                        </div>
                                                    </div>
                                                    <div class="hover-submenu">

                                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                                        <div><CiRepeat className='col-logo2' /></div>
                                                    </div>
                                                </div>
                                                <div class="col product-col">
                                                    <div>
                                                        <img src={saver4} className='product-img'></img>
                                                    </div>
                                                    <div className='product-text'>Roberts Stores</div>
                                                    <div className='product-text1'>Red & Black Headphone (Degital)</div>
                                                    <div style={{ marginLeft: "20px" }}>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                                        <span>(7)</span>
                                                    </div>
                                                    <div>
                                                        <label className='product-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                                                    </div>
                                                    <div class="rating-line"></div>
                                                    <div className='sold-style'> Sold: 4/12</div>
                                                    <div class="product-submenu" style={{ borderTop: "none" }}>
                                                        <div>
                                                            <div className='plussymbols'>
                                                                <label>
                                                                    <FaMinus />
                                                                </label>
                                                                <span style={{ padding: "20px" }}>0</span>
                                                                <label>
                                                                    <GoPlus />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <button className='product-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                                        </div>
                                                    </div>
                                                    <div class="hover-submenu">

                                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                                        <div><CiRepeat className='col-logo2' /></div>
                                                    </div>
                                                </div>
                                                <div class="col product-col">
                                                    <div>
                                                        <img src={saver5} className='product-img'></img>
                                                    </div>
                                                    <div className='product-text'>Roberts Stores</div>
                                                    <div className='product-text1'>Red & Black Headphone (Degital)</div>
                                                    <div style={{ marginLeft: "20px" }}>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                                        <span>(7)</span>
                                                    </div>
                                                    <div>
                                                        <label className='product-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                                                    </div>
                                                    <div class="rating-line"></div>
                                                    <div className='sold-style'> Sold: 4/12</div>
                                                    <div class="product-submenu" style={{ borderTop: "none" }}>
                                                        <div>
                                                            <div className='plussymbols'>
                                                                <label>
                                                                    <FaMinus />
                                                                </label>
                                                                <span style={{ padding: "20px" }}>0</span>
                                                                <label>
                                                                    <GoPlus />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <button className='product-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                                        </div>
                                                    </div>
                                                    <div class="hover-submenu">

                                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                                        <div><CiRepeat className='col-logo2' /></div>
                                                    </div>
                                                </div>
                                                <div class="col product-col">
                                                    <div>
                                                        <img src={saver6} className='product-img'></img>
                                                    </div>
                                                    <div className='product-text'>Roberts Stores</div>
                                                    <div className='product-text1'>Red & Black Headphone (Degital)</div>
                                                    <div style={{ marginLeft: "20px" }}>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                                        <span>(7)</span>
                                                    </div>
                                                    <div>
                                                        <label className='product-priceG'>$280.10</label>
                                                    </div>
                                                    <div class="rating-line"></div>
                                                    <div className='sold-style'> Sold: 4/12</div>
                                                    <div class="product-submenu" style={{ borderTop: "none" }}>
                                                        <div>
                                                            <div className='plussymbols'>
                                                                <label>
                                                                    <FaMinus />
                                                                </label>
                                                                <span style={{ padding: "20px" }}>0</span>
                                                                <label>
                                                                    <GoPlus />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <button className='product-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                                        </div>
                                                    </div>
                                                    <div class="hover-submenu">

                                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                                        <div><CiRepeat className='col-logo2' /></div>
                                                    </div>
                                                </div>
                                                <div class="col product-col">
                                                    <div>
                                                        <img src={saver4} className='product-img'></img>
                                                    </div>
                                                    <div className='product-text'>Roberts Stores</div>
                                                    <div className='product-text1'>Red & Black Headphone (Degital)</div>
                                                    <div style={{ marginLeft: "20px" }}>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                                        <span>(7)</span>
                                                    </div>
                                                    <div>
                                                        <label className='product-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                                                    </div>
                                                    <div class="rating-line"></div>
                                                    <div className='sold-style'> Sold: 4/12</div>
                                                    <div class="product-submenu" style={{ borderTop: "none" }}>
                                                        <div>
                                                            <div className='plussymbols'>
                                                                <label>
                                                                    <FaMinus />
                                                                </label>
                                                                <span style={{ padding: "20px" }}>0</span>
                                                                <label>
                                                                    <GoPlus />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <button className='product-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                                        </div>
                                                    </div>
                                                    <div class="hover-submenu">

                                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                                        <div><CiRepeat className='col-logo2' /></div>
                                                    </div>
                                                </div>
                                                <div class="col product-col">

                                                    <div>
                                                        <img src={saver2} className='product-img'></img>
                                                    </div>
                                                    <div className='product-text'>Roberts Stores</div>
                                                    <div className='product-text1'>Red & Black Headphone (Degital)</div>
                                                    <div style={{ marginLeft: "20px" }}>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>
                                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                                        <span>(7)</span>
                                                    </div>
                                                    <div>
                                                        <label className='product-priceG'>$280.10</label>
                                                    </div>
                                                    <div class="rating-line"></div>
                                                    <div className='sold-style'> Sold: 4/12</div>
                                                    <div class="product-submenu" style={{ borderTop: "none" }}>
                                                        <div>
                                                            <div className='plussymbols'>
                                                                <label>
                                                                    <FaMinus />
                                                                </label>
                                                                <span style={{ padding: "20px" }}>0</span>
                                                                <label>
                                                                    <GoPlus />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <button className='product-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                                        </div>
                                                    </div>
                                                    <div class="hover-submenu">

                                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                                        <div><CiRepeat className='col-logo2' /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

