import '../FeatureProducts/featurePro.component.css';
import { IoIosArrowForward } from "react-icons/io";
import saver1 from '../../../assets/jl1.jpg';
import saver2 from '../../../assets/fp1.jpg';
import saver3 from '../../../assets/jl-2.jpg';
import saver4 from '../../../assets/saver7.jpg';
import saver5 from '../../../assets/saver8.jpg';
import saver6 from '../../../assets/saver9.jpg';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiRepeat } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export function FeaturedPro() {

    return (
        <div>
            <div>
                <label className='feat-text'>Featured products</label>
                <label className='top-up-gap'>All Offers</label><IoIosArrowForward />

            </div>
            <div>

                <div>
                    <div class="row" style={{ marginLeft: "10px" }}>
                        <div class="col featured-col">
                        <div className='offer-strip1'>40%</div>
                            <div>
                                <img src={saver1} className='featured-img'></img>
                            </div>
                            <div className='featured-text'>Roberts Stores</div>
                            <div className='featured-text1'>Red & Black Headphone (Degital)</div>
                            <div style={{ marginLeft: "20px" }}>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star empty">&#9733;</span>
                                <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                <span>(7)</span>
                            </div>
                            <div>
                                <label className='featured-priceG'>$280.10</label>
                            </div>
                            <div class="rating-line"></div>
                            <div className='sold-style'> Sold: 4/12</div>
                            <div class="featured-submenu" style={{borderTop:"none"}}>
                                <div>
                                    <div className='plussymbols'>
                                        <label>
                                            <FaMinus />
                                        </label>
                                        <span style={{ padding: "20px" }}>0</span>
                                        <label>
                                            <FaPlus />
                                        </label>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                <button className='featured-addcart'><IoCartOutline className='button-cart'/>Add Cart</button>
                                </div>
                            </div>
                            <div class="hover-submenu1">
                            <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                <div><IoIosHeartEmpty className='col-logo2' /></div>
                                <div><CiRepeat className='col-logo2'/></div>

                            </div>

                        </div>
                        <div class="col featured-col">
                            <div>
                                <img src={saver2} className='featured-img'></img>
                            </div>
                            <div className='featured-text'>Roberts Stores</div>
                            <div className='featured-text1'>Red & Black Headphone (Degital)</div>
                            <div style={{ marginLeft: "20px" }}>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star empty">&#9733;</span>
                                <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                <span>(7)</span>
                            </div>
                            <div>
                                <label className='featured-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                            </div>
                            <div class="rating-line"></div>
                            <div className='sold-style'> Sold: 4/12</div>
                            <div class="featured-submenu" style={{borderTop:"none"}}>
                                <div>
                                    <div className='plussymbols'>
                                        <label>
                                            <FaMinus />
                                        </label>
                                        <span style={{ padding: "20px" }}>0</span>
                                        <label>
                                            <FaPlus />
                                        </label>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                <button className='featured-addcart'><IoCartOutline className='button-cart'/>Add Cart</button>
                                </div>
                            </div>
                            <div class="hover-submenu1">
                            <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                <div><IoIosHeartEmpty className='col-logo2' /></div>
                                <div><CiRepeat className='col-logo2'/></div>

                            </div>
                        </div>
                        <div class="col featured-col">
                            <div>
                                <img src={saver3} className='featured-img'></img>
                            </div>
                            <div className='featured-text'>Roberts Stores</div>
                            <div className='featured-text1'>Red & Black Headphone (Degital)</div>
                            <div style={{ marginLeft: "20px" }}>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star empty">&#9733;</span>
                                <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                <span>(7)</span>
                            </div>
                            <div>
                                <label className='featured-priceG'>$280.10</label>
                            </div>
                            <div class="rating-line"></div>
                            <div className='sold-style'> Sold: 4/12</div>
                            <div class="featured-submenu" style={{borderTop:"none"}}>
                                <div>
                                    <div className='plussymbols'>
                                        <label>
                                            <FaMinus />
                                        </label>
                                        <span style={{ padding: "20px" }}>0</span>
                                        <label>
                                            <FaPlus />
                                        </label>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                <button className='featured-addcart'><IoCartOutline className='button-cart'/>Add Cart</button>
                                </div>
                            </div>
                            <div class="hover-submenu1">
                            <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                <div><IoIosHeartEmpty className='col-logo2' /></div>
                                <div><CiRepeat className='col-logo2'/></div>

                            </div>
                        </div>
                        <div class="col featured-col">
                            <div>
                                <img src={saver4} className='featured-img'></img>
                            </div>
                            <div className='featured-text'>Roberts Stores</div>
                            <div className='featured-text1'>Red & Black Headphone (Degital)</div>
                            <div style={{ marginLeft: "20px" }}>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star empty">&#9733;</span>
                                <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                <span>(7)</span>
                            </div>
                            <div>
                                <label className='featured-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                            </div>
                            <div class="rating-line"></div>
                            <div className='sold-style'> Sold: 4/12</div>
                            <div class="featured-submenu" style={{borderTop:"none"}} >
                                <div>
                                    <div className='plussymbols'>
                                        <label>
                                            <FaMinus />
                                        </label>
                                        <span style={{ padding: "20px" }}>0</span>
                                        <label>
                                            <FaPlus />
                                        </label>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                <button className='featured-addcart'><IoCartOutline className='button-cart'/>Add Cart</button>
                                </div>
                            </div>
                            <div class="hover-submenu1">
                            <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                <div><IoIosHeartEmpty className='col-logo2' /></div>
                                <div><CiRepeat className='col-logo2'/></div>

                            </div>
                        </div>
                        <div class="col featured-col">
                            <div>
                                <img src={saver5} className='featured-img'></img>
                            </div>
                            <div className='featured-text'>Roberts Stores</div>
                            <div className='featured-text1'>Red & Black Headphone (Degital)</div>
                            <div style={{ marginLeft: "20px" }}>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star empty">&#9733;</span>
                                <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                <span>(7)</span>
                            </div>
                            <div>
                                <label className='featured-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                            </div>
                            <div class="rating-line"></div>
                            <div className='sold-style'> Sold: 4/12</div>
                            <div class="featured-submenu" style={{borderTop:"none"}}>
                                <div>
                                    <div className='plussymbols'>
                                        <label>
                                            <FaMinus />
                                        </label>
                                        <span style={{ padding: "20px" }}>0</span>
                                        <label>
                                            <FaPlus />
                                        </label>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                <button className='featured-addcart'><IoCartOutline className='button-cart'/>Add Cart</button>
                                </div>
                            </div>
                            <div class="hover-submenu1">
                            <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                <div><IoIosHeartEmpty className='col-logo2' /></div>
                                <div><CiRepeat className='col-logo2'/></div>

                            </div>
                        </div>
                        <div class="col featured-col">
                            <div>
                                <img src={saver6} className='featured-img'></img>
                            </div>
                            <div className='featured-text'>Roberts Stores</div>
                            <div className='featured-text1'>Red & Black Headphone (Degital)</div>
                            <div style={{ marginLeft: "20px" }}>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star empty">&#9733;</span>
                                <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                <span>(7)</span>
                            </div>
                            <div>
                                <label className='featured-priceG'>$280.10</label>
                            </div>
                            <div class="rating-line"></div>
                            <div className='sold-style'> Sold: 4/12</div>
                            <div class="featured-submenu" style={{borderTop:"none"}}>
                                <div>
                                    <div className='plussymbols'>
                                        <label>
                                            <FaMinus />
                                        </label>
                                        <span style={{ padding: "20px" }}>0</span>
                                        <label>
                                            <FaPlus />
                                        </label>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <button className='featured-addcart'><IoCartOutline className='button-cart'/>Add Cart</button>
                                </div>
                            </div>
                            <div class="hover-submenu1">
                            <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                <div><IoIosHeartEmpty className='col-logo2' /></div>
                                <div><CiRepeat className='col-logo2'/></div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='featured-foot-gap'></div>


        </div>
    )
}