import '../Footer/footer.component.css';
import icon from '../../assets/icon-rocket.png';
import icon1 from '../../assets/icon-reload1.png';
import icon2 from '../../assets/icon-protect2.png';
import icon3 from '../../assets/icon-support4.png';
import icon4 from '../../assets/icon-tag5.png'
import { IoCallOutline } from "react-icons/io5";
import { PiHouseLine } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import foot from '../../assets/fotlogo.png';
import foot1 from '../../assets/fotlog1.png';
import foot2 from '../../assets/fotlogo2.png';
import foot3 from '../../assets/fotlogo4.png';
import foot4 from '../../assets/fotlogo5.png';
import foot5 from '../../assets/fotlogo6.png';
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";




export function Footer() {
    return (

        <div className="footer-box">
            <div class="row">
                <div class="col">
                    <div class="row">

                        <div>
                            <img src={icon}></img>
                        </div>
                        <div className='icon-text'>Free Shipping</div>
                        <div className='icon-small-text'>For all orders over $200</div>

                    </div>
                </div>
                <div class="col">
                    <div class="row">

                        <div>
                            <img src={icon1}></img>
                        </div>
                        <div className='icon-text'>Free Shipping</div>
                        <div className='icon-small-text'>For all orders over $200</div>

                    </div>
                </div>
                <div class="col">
                    <div class="row">

                        <div>
                            <img src={icon2}></img>
                        </div>
                        <div className='icon-text'>Free Shipping</div>
                        <div className='icon-small-text'>For all orders over $200</div>

                    </div>
                </div>
                <div class="col">
                    <div class="row">

                        <div>
                            <img src={icon3}></img>
                        </div>
                        <div className='icon-text'>Free Shipping</div>
                        <div className='icon-small-text'>For all orders over $200</div>

                    </div>
                </div>
                <div class="col">
                    <div class="row">

                        <div>
                            <img src={icon4}></img>
                        </div>
                        <div className='icon-text'>Free Shipping</div>
                        <div className='icon-small-text'>For all orders over $200</div>

                    </div>
                </div>
            </div>
            <hr className='Foot-hrline'></hr>

            <div>
                <div class="row">
                    <div class="col">

                        <div className='foot-text'>Farmart – Your Online Foods & Grocery </div>
                        <div className='foot-small-text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus viverra iaculis. Etiam vulputate et justo eget scelerisque.</div>
                        <div className='foot-small-text1'> <IoCallOutline />&nbsp;&nbsp;Hotline 24/7:</div>
                        <div className='foot-text1'>(+91) 7989255561</div>
                        <div className='foot-small-text1'> <PiHouseLine />&nbsp;&nbsp;959 Homestead Street Eastlake, NYC</div>
                        <div className='foot-small-text1'><MdOutlineMail />&nbsp;&nbsp;support@farmart.com</div>
                        <div className='foot-small-text1'> <CiClock2 />&nbsp;&nbsp;Mon - Fri: 07AM - 06PM</div>

                    </div>
                    <div class="col">
                        <div className='foot-text'>Useful Links</div>
                        <div className='foot-small-text'>Terms Of Use</div>
                        <div className='foot-small-text'> Terms & Conditions</div>
                        <div className='foot-small-text'>Refund Policy</div>
                        <div className='foot-small-text'>FAQs</div>
                        <div className='foot-small-text'>404 Page</div>
                    </div>
                    <div class="col">
                        <div className='foot-text'> Help Center</div>
                        <div className='foot-small-text'>About us</div>
                        <div className='foot-small-text'>Affiliate</div>
                        <div className='foot-small-text'>Career</div>
                        <div className='foot-small-text'>Contact us</div>
                    </div>
                    <div class="col">
                        <div className='foot-text'>Business</div>
                        <div className='foot-small-text'>Our blog</div>
                        <div className='foot-small-text'>Cart</div>
                        <div className='foot-small-text'>My account</div>
                        <div className='foot-small-text'>Shop</div>
                    </div>
                    <div class="col">

                        <div className='foot-text'>Newsletter</div>
                        <div className='foot-small-text1' style={{ marginLeft: "-30px" }}>
                            Register now to get updates on promotions and coupon. Don’t worry! We not spam</div>
                        <br></br>
                        <br></br>

                        <div class="search-container">

                            <input type='text' placeholder='✉ Your Mail Here..' className='foot-search'></input>
                            <button className='foot-search-button'>subscribe</button>
                        </div>

                    </div>
                </div>
                <hr className='Foot-hrline'></hr>
                <div>
                    <div>
                        <label className='fot-last-text'> Consumer Electric:</label>&nbsp;&nbsp;
                        <label className='fot-last-smalltext'> Fruits |</label>
                        <label className='fot-last-smalltext'>Apples |</label>
                        <label className='fot-last-smalltext'>Bananas |</label>
                        <label className='fot-last-smalltext'>Berries |</label>
                        <label className='fot-last-smalltext'>Oranges & Easy |</label>
                        <label className='fot-last-smalltext'>PeelersCabbage, |</label>
                        <label className='fot-last-smalltext'>Spinach & Greens |</label>
                        <label className='fot-last-smalltext'> Grapes </label>
                    </div>

                    <div>
                        <label className='fot-last-text'>Clothing & Apparel:</label>&nbsp;&nbsp;
                        <label className='fot-last-smalltext'>  Lemons & Limes |</label>
                        <label className='fot-last-smalltext'> Peaches & Nectarines |</label>
                        <label className='fot-last-smalltext'>  Pears |</label>
                        <label className='fot-last-smalltext'>Melon |</label>
                        <label className='fot-last-smalltext'>Avocados</label>
                    </div>

                    <div>
                        <label className='fot-last-text'>Home, Garden & Kitchen:</label>&nbsp;&nbsp;
                        <label className='fot-last-smalltext'>Potatoes |</label>
                        <label className='fot-last-smalltext'> Vegetables |</label>
                        <label className='fot-last-smalltext'>Carrots & Root  |</label>
                        <label className='fot-last-smalltext'>Vegetables |</label>
                        <label className='fot-last-smalltext'> Broccoli & Cauliflower |</label>
                        <label className='fot-last-smalltext'>  Plums & Apricots </label>
                    </div>

                    <div>
                        <label className='fot-last-text'>Health & Beauty:</label>&nbsp;&nbsp;
                        <label className='fot-last-smalltext'>Breads |</label>
                        <label className='fot-last-smalltext'> Sweets |</label>
                        <label className='fot-last-smalltext'> Mushrooms  |</label>
                        <label className='fot-last-smalltext'> Tomatoes |</label>
                        <label className='fot-last-smalltext'>Beans, Peas & Sweetcorn |</label>
                        <label className='fot-last-smalltext'>   Freshly Drink Orange Juice  </label>
                    </div>

                    <div>

                        <label className='fot-last-text'>Computer & Technologies:</label>&nbsp;&nbsp;
                        <label className='fot-last-smalltext'> Crisps, Snacks & Nuts |</label>
                        <label className='fot-last-smalltext'> Crisps & Popcorn |</label>
                        <label className='fot-last-smalltext'> Nuts & Seeds |</label>
                        <label className='fot-last-smalltext'> Lighter Options |</label>
                        <label className='fot-last-smalltext'> Cereal Bars |</label>
                        <label className='fot-last-smalltext'>Onions, Leeks & Garlic </label>
                    </div>

                </div>
                <hr className='Foot-hrline'></hr>
                <div>
                    <label>©2024 Farmart. All Rights Reserved.</label>
                    <label className='foot-img-gap'>
                        <img src={foot} className='foot-img'></img>
                        <img src={foot1} className='foot-img'></img>
                        <img src={foot2} className='foot-img'></img>
                        <img src={foot3} className='foot-img'></img>
                        <img src={foot4} className='foot-img'></img>
                        <img src={foot5} className='foot-img'></img>
                    </label>
             
                    <label className='foot-img-gap'>
                        <label className='stay-text'>Stay connected:</label>
                        <label className='foot-logs-box'><SlSocialFacebook style={{ height: "22", width: "23" }}  /></label>
                        <label  className='foot-logs-box'><TfiTwitter style={{ height: "22", width: "23" }} /></label>
                        <label className='foot-logs-box' ><FaInstagram style={{ height: "22", width: "23" }} /></label>
                        <label className='foot-logs-box'><TbBrandPicsart style={{ height: "22", width: "23" }} /></label>
                        <label className='foot-logs-box'><AiOutlineYoutube style={{ height: "22", width: "23" }}  /></label>



                        
                    </label>
                </div>


            </div>
        </div>



    )
}