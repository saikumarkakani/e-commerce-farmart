import '../Headers/header.component.css';
import pic from '../../assets/saver8.jpg';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiRepeat } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import logo from "../../assets/logo.png";
import { BsList } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { IoPricetagOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { GiBread } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { PiHamburger } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import { GiWineGlass } from "react-icons/gi";
import { PiCoffeeLight } from "react-icons/pi";
import { CiCoffeeCup } from "react-icons/ci";
import { PiBowlFood } from "react-icons/pi";
import { LiaCheeseSolid } from "react-icons/lia";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContextVariable } from '../Service/userContext';
import store from '../Service/reduxStore.service';
import { getaddCartData } from '../Service/addcart.service';
import ModalPopup from '../Shared-Component/modelPopup.component';
import { DeleteAddcart } from '../Shared-Component/Delete-Popup/deletecartpop.component';
import axios from 'axios';
import { getcountCart } from '../Service/countaddcart.service';
import { getcountCompare } from '../Service/countcompare.service';
import { getcountwishlist } from '../Service/countwishlist.service';






export function Headers() {

    const [addCartData, setaddCartData] = useState([]);
    //for addcart delete
    const [ShowDeletepopup, setShowDeletepopup] = useState(false);
    const [deleteAddcartItem, setdeleteAddcartItem] = useState(0);

    //for count cart
    const [countcart, setcountcart] = useState([]);
    //for count wishlist
    const [countwishlist, setcountwishlist] = useState([]);
    //for count Compare
    const [countCompare, setcountCompare] = useState([]);

  
    //for search product
    const searchProductsRef = useRef();

    //for navebare sticky
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef(null);


   

    //for Sticky NaveBar
    const handleScroll = () => {
        if (navRef.current) {
            const offsetTop = navRef.current.offsetTop;
            setIsSticky(window.scrollY > offsetTop);
        }
    };



    useEffect(() => {
        getaddCartData().then((res) => {
            setaddCartData(res.data)
        });
        getcountCart().then((res) => {
            setcountcart(res.data)
        });
        getcountCompare().then((res) => {
            setcountCompare(res.data)
        });
        getcountwishlist().then((res) => {
            setcountwishlist(res.data)
        })
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

  

    async function deleteAddcartProduct() {
        if (deleteAddcartItem > 0) {
            const config = {
                header: { "content-Type": "multipart/form-data" }
            };
            const newForm = new FormData();
            newForm.append('id', deleteAddcartItem);
            const res = await axios.post("http://localhost:4002/deleteAddcartItem", newForm, config);
            window.location.reload();
        }
    }

    async function searchProductData() {
        let formData = new FormData();
        formData.append("productName", searchProductsRef.current.value);
        const config = {
            headers: { "context-Type": "multipart/form-data" }
        }
        const res = await axios.post("http://localhost:4002/searchProduct", formData, config);
        store.dispatch({ type: "products", data: res.data });

    }



    return (
        <div>
        
            <div ref={navRef} className={`fixed-container ${isSticky ? 'sticky' : ''}`}>
                <Link to='/'> <img src={logo} className='far-logo'></img></Link>
                <label className='cat-gap'>


                    <select className='cat-style'>

                        <option value=""> ALL CATEGORIES <IoIosArrowDown />|</option>
                        <option value="Apple">Apple</option>
                        <option value="Banana">Banana</option>
                        <option value="Orange">Orange</option>
                        <option value="Grapes">Grapes</option>
                        <option value="Strawberry">Strawberry</option>
                        <option value="Watermelon">Watermelon</option>
                        <option value="Broccoli">Broccoli</option>
                        <option value="Carrot">Carrot</option>
                        <option value="Spinach">Spinach</option>
                        <option value="Tomato">Tomato</option>
                        <option value="Cucumber">Cucumber</option>
                        <option value="Lettuce">Lettuce</option>
                        <option value="Pineapple">Pineapple</option>
                        <option value="Mango">Mango</option>
                        <option value="Bell Pepper">Bell Pepper</option>
                        <option value="Onion">Onion</option>
                        <option value="Potato">Potato</option>
                        <option value="Avocado">Avocado</option>
                        <option value="Kiwi">Kiwi</option>
                        <option value="Pear">Pear</option>
                        <option value="Peach">Peach</option>
                        <option value="Cherry">Cherry</option>
                        <option value="Cabbage">Cabbage</option>
                        <option value="Zucchini">Zucchini</option>
                        <option value="Eggplant">Eggplant</option>
                        <option value="Corn">Corn</option>
                        <option value="Radish">Radish</option>
                        <option value="Beetroot">Beetroot</option>
                        <option value="Celery">Celery</option>
                        <option value="Asparagus">Asparagus</option>

                    </select>



                    <label>
                        <input type='text' placeholder='Search for Products....' className='Search-for-Products' ref={searchProductsRef}></input>
                        <CiSearch className='search-style' onClick={() => { searchProductData() }} />
                    </label>

                </label>
                <label className='support-gap'>
                    <div className='number'>8 800 332 65-66</div>
                    <div className='support'>Support 24/7</div>
                </label>
                <label className='symbols'>
                    {
                        countCompare && countCompare.map((item) =>
                            <span className='com-strip'>{item.count}</span>
                        )
                    }

                    <Link to="/compare" style={{ textDecoration: 'none', color: "black" }}> <CiRepeat style={{ width: "40px", height: "30px", marginLeft: "7px" }} /></Link> &nbsp;&nbsp;
                    {
                        countwishlist && countwishlist.map((item) =>
                            <span className='repet-strip'>{item.count}</span>
                        )
                    }

                    <Link to='/wishlist' style={{ textDecoration: 'none', color: "black" }}><IoIosHeartEmpty style={{ width: "40px", height: "30px" }} /></Link> &nbsp;&nbsp;

                    <label className='cartitem'>
                        <Link to='/cart' style={{ textDecoration: 'none', color: "black" }}><PiShoppingCartLight style={{ width: "40px", height: "30px" }} /></Link>

                        <div className='cartHover'>
                            <div>




                                {
                                    addCartData && addCartData.map((item, index) =>
                                        <div className='d-flex'>
                                            <div style={{ marginTop: "45px" }}>
                                                {
                                                    item.productImage && <img src={item.productImage} className='cartimg'></img>
                                                }
                                                {
                                                    !item.productImage && <img src={pic} className='cartimg'></img>
                                                }

                                            </div>
                                            <div style={{ marginLeft: "40px" }}>

                                                <div className='cart-box-text cart-box-text2' style={{ marginTop: "20px", marginLeft: "50px" }}><b>{item.productName}</b></div>
                                                <div className='cart-box-text1'>Vendor: <span>{item.productdetails}</span></div>
                                                <div><label style={{ marginLeft: "30px" }}>${item.newprice}</label>&nbsp;&nbsp;
                                                    <label><del>${item.oldprice}</del></label>
                                                </div>
                                            </div>


                                            <div><RiDeleteBin6Line style={{ width: "27px", height: "40px", marginTop: "40px", marginLeft: "70px" }} onClick={() => { setdeleteAddcartItem(item.id); setShowDeletepopup(true) }} /></div>
                                        </div>


                                    )}


                                <br></br>


                                <div>
                                    <ModalPopup open={ShowDeletepopup} title={"AddCart Delete Item"} closeModal={() => { setShowDeletepopup(false) }} >
                                        <DeleteAddcart deleteAddCartId={() => { deleteAddcartProduct(); setShowDeletepopup(false) }}></DeleteAddcart>
                                    </ModalPopup>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='cart-total-boxsub' style={{ height: "270px" }}>
                                <div>
                                    <label className='cart-total-smalltext'>Subtotal:</label>
                                    <label className='sub-text'>$2000</label>
                                </div>
                                <div>
                                    <label className='cart-total-smalltext'>Tax:</label>
                                    <label className='sub-text1'>$33</label>
                                </div>
                                <div>
                                    <label className='cart-total-smalltext'>Total:</label>

                                    <label className='sub-text2'>$2033</label>
                                    <div className='cart-box-smalltxt'>(Shipping fees not included)</div>
                                </div>
                                <div>
                                    <Link to='/cart' style={{ textDecoration: 'none', color: "black" }}><label className='Hsub-view-style'>View Cart</label></Link>
                                    <label className='Hsub-checkout-style'>checkout </label>
                                </div>


                            </div>



                        </div>

                    </label>

                    {
                        countcart && countcart.map((item) =>
                            <span className='cart-strip'>{item.count}</span>
                        )
                    }



                </label>
                <label className='your'>Your Cart<br></br>
                    <label className='cur'>$0.00</label>
                </label>


            </div>


            <div>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">


                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">

                                <ul>
                                    <label className='shopby-style'>
                                        <BsList style={{ height: "28", width: "30" }} />
                                        <label className='shopby-style-text'> SHOP BY CATEGORIES</label>
                                        <ul className="far-sub-menu1" style={{ height: "360px" }}>
                                            <li className="far-li"> <CiStar style={{ height: "25px", width: "25px" }} />&nbsp;&nbsp;fruits & vegitables <IoIosArrowForward style={{ marginLeft: "60px" }} />
                                                <ul className="sub-sub-menu">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div className='fruits'>Fruits</div>
                                                                <ul>
                                                                    <li className='fruits-text-style'> Apples</li>
                                                                    <li className='fruits-text-style'> Bananas</li>
                                                                    <li className='fruits-text-style'>Berries</li>
                                                                    <li className='fruits-text-style'> Oranges & Easy Peelers</li>
                                                                    <li className='fruits-text-style'>Grapes</li>
                                                                    <li className='fruits-text-style'>Lemons & Limes</li>
                                                                    <li className='fruits-text-style'>Peaches & Nectarines</li>
                                                                    <li className='fruits-text-style'>Pears</li>
                                                                    <li className='fruits-text-style'>Melon</li>
                                                                    <li className='fruits-text-style'> Avocados</li>
                                                                    <li className='fruits-text-style'>Plums & Apricots</li>
                                                                </ul>

                                                            </div>
                                                            <div class="col">
                                                                <div className='fruits'>Vegitables</div>
                                                                <li className='fruits-text-style'>Potatoes</li>
                                                                <li className='fruits-text-style'>Carrots & Root Vegetables</li>
                                                                <li className='fruits-text-style'>Broccoli & Cauliflower</li>
                                                                <li className='fruits-text-style'>Cabbage, Spinach & Greens</li>
                                                                <li className='fruits-text-style'>Onions, Leeks & Garlic</li>
                                                                <li className='fruits-text-style'>Mushrooms</li>
                                                                <li className='fruits-text-style'>Tomatoes</li>
                                                                <li className='fruits-text-style'>Beans, Peas & Sweetcorn</li>
                                                                <li className='fruits-text-style'>Freshly Drink Orange Juic</li>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </ul>




                                            </li>

                                            <li className="far-li"><GiBread style={{ height: "25px", width: "25px" }} /> &nbsp;&nbsp;Breads & Sweets <IoIosArrowForward style={{ marginLeft: "68px" }} />


                                                <ul className="sub-sub-menu">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div className='fruits'>Crisps, Snacks & Nuts</div>
                                                                <ul>
                                                                    <li className='fruits-text-style'>Crisps & Popcorn</li>
                                                                    <li className='fruits-text-style'>Nuts & Seeds</li>
                                                                    <li className='fruits-text-style'>Lighter Options</li>
                                                                    <li className='fruits-text-style'> Cereal Bars</li>
                                                                    <li className='fruits-text-style'>Breadsticks & Pretzels</li>
                                                                    <li className='fruits-text-style'>Fruit Snacking</li>
                                                                    <li className='fruits-text-style'>Rice & Corn Cakes</li>
                                                                    <li className='fruits-text-style'> Rice & Corn Cakes</li>
                                                                    <li className='fruits-text-style'> Protein & Energy Snacks</li>
                                                                    <li className='fruits-text-style'>Toddler Snacks </li>
                                                                    <li className='fruits-text-style'>Meat Snacks</li>
                                                                    <li className='fruits-text-style'>Beans</li>
                                                                    <li className='fruits-text-style'>Lentils </li>
                                                                    <li className='fruits-text-style'>Chickpeas</li>

                                                                </ul>

                                                            </div>
                                                            <div class="col">
                                                                <div className='fruits'>Tins & Cans</div>
                                                                <ul>
                                                                    <li className='fruits-text-style'> Tomatoes</li>
                                                                    <li className='fruits-text-style'>Baked Beans, Spaghetti</li>
                                                                    <li className='fruits-text-style'>Fish</li>
                                                                    <li className='fruits-text-style'>Beans & Pulses</li>
                                                                    <li className='fruits-text-style'>Fruit</li>
                                                                    <li className='fruits-text-style'>Coconut Milk & Cream</li>
                                                                    <li className='fruits-text-style'>Lighter Options</li>
                                                                    <li className='fruits-text-style'>Olives</li>
                                                                    <li className='fruits-text-style'>Sweetcorn</li>
                                                                    <li className='fruits-text-style'>Carrots</li>
                                                                    <li className='fruits-text-style'>Peas</li>
                                                                    <li className='fruits-text-style'>Mixed Vegetables</li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </ul>

                                            </li>
                                            <li className="far-li"><PiHamburger style={{ height: "25px", width: "25px" }} />&nbsp;&nbsp;Frozen Seafoods</li>
                                            <li className="far-li"><TbMeat style={{ height: "25px", width: "25px" }} /> &nbsp;&nbsp;Raw Meats</li>
                                            <li className="far-li"><GiWineGlass style={{ height: "25px", width: "25px" }} />  &nbsp;&nbsp; Wines & Alcohol Drinks <IoIosArrowForward style={{ marginLeft: "12px" }} />



                                                <ul className="sub-sub-menu">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div className='fruits'>Ready Meals</div>
                                                                <ul>
                                                                    <li className='fruits-text-style'>Meals for 1</li>
                                                                    <li className='fruits-text-style'>Meals for 2</li>
                                                                    <li className='fruits-text-style'> Indian</li>
                                                                    <li className='fruits-text-style'>Italian </li>
                                                                    <li className='fruits-text-style'>Chinese </li>
                                                                    <li className='fruits-text-style'>Traditional British </li>
                                                                    <li className='fruits-text-style'> Thai & Oriental</li>
                                                                    <li className='fruits-text-style'>Mediterranean & Moroccan </li>
                                                                    <li className='fruits-text-style'>Mexican & Caribbean </li>
                                                                    <li className='fruits-text-style'>Lighter Meals </li>
                                                                </ul>

                                                            </div>
                                                            <div class="col">
                                                                <div className='fruits'>Salad & Herbs</div>
                                                                <ul>
                                                                    <li className='fruits-text-style'>Salad Bags</li>
                                                                    <li className='fruits-text-style'>Cucumber</li>
                                                                    <li className='fruits-text-style'>Tomatoes</li>
                                                                    <li className='fruits-text-style'>Lettuce</li>
                                                                    <li className='fruits-text-style'>Lunch Salad Bowls </li>
                                                                    <li className='fruits-text-style'>Lunch Salad Bowls </li>
                                                                    <li className='fruits-text-style'>Fresh Herbs </li>
                                                                    <li className='fruits-text-style'>Avocados</li>
                                                                    <li className='fruits-text-style'> Peppers</li>
                                                                    <li className='fruits-text-style'> Coleslaw & Potato Salad </li>
                                                                    <li className='fruits-text-style'> Spring Onions </li>
                                                                    <li className='fruits-text-style'>  Chilli, Ginger & Garlic </li>


                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </ul>
                                            </li>
                                            <li className="far-li"><PiCoffeeLight style={{ height: "25px", width: "25px" }} /> &nbsp;&nbsp;Tea & Coffee</li>
                                            <li className="far-li"><CiCoffeeCup style={{ height: "25px", width: "25px" }} /> &nbsp;&nbsp;Milks & Dairies</li>
                                            <li className="far-li"><PiBowlFood style={{ height: "25px", width: "25px" }} /> &nbsp;&nbsp;Pet Foods</li>
                                            <li className="far-li" ><LiaCheeseSolid style={{ height: "25px", width: "25px" }} />  &nbsp;&nbsp;Food Cupboard</li>
                                        </ul>
                                    </label>
                                    <label className='items-gap'></label>
                                  <Link to='/special' style={{ textDecoration: 'none' }}> <li className="far-items"> <IoPricetagOutline />&nbsp;Special Prices</li></Link> 
                                    <li className="far-items">Pages<MdKeyboardArrowDown />
                                        <ul className="far-sub-menu1" style={{ height: "175px" }}  >
                                            <Link to="/aboutus" style={{ textDecoration: 'none' }}><li className="far-li1">About Us</li></Link>
                                            <li className="far-li1">Terms of Use</li>
                                            <li className="far-li1">Terms & Conditions</li>
                                            <li className="far-li1">Refund Policy</li>
                                            <li className="far-li1">Coming Soon</li>
                                        </ul>
                                    </li>

                                    <li className="far-items">Shop<MdKeyboardArrowDown />
                                        <ul className="far-sub-menu1" style={{ height: "130px" }}>
                                            <Link to='/products' style={{ textDecoration: 'none' }}> <li className="far-li1">All Products</li> </Link>
                                            <Link to='/procate' style={{ textDecoration: 'none' }}><li className="far-li1">Products & Category</li></Link>
                                           <Link to ='/special'  style={{ textDecoration: 'none' }}><li className="far-li1">Product Single</li></Link> 
                                        </ul>

                                    </li>
                                    <Link to='/stores'><li className="far-items">Stores</li></Link>
                                    <Link to='/blog'><li className="far-items ">Blog</li></Link>
                                    <Link to='/faq'><li className="far-items">FAQs</li></Link>
                                    <Link to='/contact'><li className="far-items">Contact</li></Link>
                                    <li className="far-items">Add Products<MdKeyboardArrowDown />
                                        <ul className="far-sub-menu1" style={{ height: "90px", width: "150px" }}>
                                            <Link to="/addTop" style={{ textDecoration: 'none' }}> <li className="far-li1">Saver Today </li></Link>
                                            <Link to='/addJust' style={{ textDecoration: 'none' }}><li className="far-li1">Just Landing</li></Link>
                                        </ul>
                                    </li>

                                </ul>
                                <label style={{ marginLeft: "280px" }}><SlRefresh />
                                    <label className="far-items" style={{ marginTop: "20px" }}>Recently Viewed</label>
                                </label>


                            </div>
                        </div>
                    </div>
                </nav>


            </div>



        </div>
    );
}

