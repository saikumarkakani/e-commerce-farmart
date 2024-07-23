import '../TopSavers/topsaver.component.css';
import { IoIosArrowForward } from "react-icons/io";
import saver1 from '../../../assets/saver1.jpg';
import saver2 from '../../../assets/saver2.jpg';
import saver3 from '../../../assets/saver3.jpg';
import saver4 from '../../../assets/saver4.jpg';
import saver5 from '../../../assets/saver5.jpg';
import saver6 from '../../../assets/saver6.jpg';
import b1 from '../../../assets/b-1.png';
import b2 from '../../../assets/b-2.png';
import b3 from '../../../assets/b-3.png';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiRepeat } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";

import { useEffect, useState } from 'react';
import { getProducts } from '../../Service/product.service';
import store from '../../Service/reduxStore.service';



export function TopSavers() {
    //for products
    const [saverProducts, setsaverProducts] = useState([]);

    //for wishlistmsg popup
    const [showWishListmsg, setshowWishListmsg] = useState(false);
    //for addcartmsg popup
    const [showaddcartmsg, setshowaddcartmsg] = useState(false);
    //for comparemsg popup
    const [showcomparemsg, setshowcomparemsg] = useState(false);
    

    useEffect(() => {
        getProducts().then((res) => {
            setsaverProducts(res.data);
        });
        store.subscribe(()=>{
            const products = store.getState().products;
            setsaverProducts(products);
        })

    },[]);

        //for increment
        function TopSaverincrement(item, index) {

            let data = JSON.parse(JSON.stringify(saverProducts));
            data[index].Quantity = item.Quantity + 1;
            setsaverProducts(data);
    
        }
        //for decrement
        
        function TopSaverdecrement(item, index) {
            if (item.Quantity > 0) {
                let data = JSON.parse(JSON.stringify(saverProducts));
                data[index].Quantity = item.Quantity - 1;
                setsaverProducts(data);
            }
        }
    


    return (
        <div>
            <div>
                <label className='feat-text'>Top Saver Today</label>
                <label className='top-up-gap'>All Offers</label><IoIosArrowForward />

            </div>
            <div>

                <div>
                    <div className="d-flex" style={{ marginLeft: "10px" }}>

                        {
                            saverProducts && saverProducts.map((item, index) =>

                                <div class=" saver-col">
                                    <div className='offer-strip'>{item.offer}%</div>
                                    <div>
                                        {
                                            item.productImage && <img src={item.productImage} className='saver-img'></img>
                                        }
                                        {
                                            !item.productImage && <img src={saver3} className='saver-img'></img>
                                        }

                                    </div>

                                    <div className='savers-text'>{item.productName}</div>
                                    <div className='savers-text1'>{item.productdetails}</div>
                                    <div style={{ marginLeft: "20px" }}>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star empty">&#9733;</span>
                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                        <span>(7)</span>
                                    </div>
                                    <div>
                                        <label className='saver-priceG'>${item.newprice * item.Quantity}</label>
                                        <label><del>${item.oldprice}</del></label>
                                    </div>
                                    <div class="rating-line"></div>
                                    <div className='sold-style'> Sold: 4/12</div>
                                    <div class="saver-submenu" style={{ borderTop: "none" }}>
                                        <div>
                                            <div className='plussymbols'>
                                                <label style={{ marginLeft: "20px" }}>
                                                    <FaMinus onClick={() => {TopSaverdecrement(item,index)}} />
                                                </label>
                                                <span style={{ padding: "10px", marginLeft: "10px" }}>{item.Quantity}</span>
                                                <label>
                                                    <FaPlus onClick={() => {TopSaverincrement(item,index)}} />
                                                </label>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div>
                                            <form id={"addcart" + item.id} method="post" action="http://localhost:4002/addcart" >
                                                <input type="hidden" value={item.id} name="productid"></input>
                                            </form>
                                            <button className='saver-addcart' onClick={() => { document.getElementById("addcart" + item.id).submit(); setshowaddcartmsg(true) }}><IoCartOutline className='button-cart' />Add Cart</button>
                                        </div>
                                    </div>
                                    <div class="hover-submenu2">
                                        <div><MdOutlineZoomOutMap className='col-logo' /></div>
                                        <form id={"wishlist" + item.id} method="post" action="http://localhost:4002/addWishList" >
                                            <input type="hidden" value={item.id} name="productid"></input>
                                        </form>
                                        <div onClick={() => { document.getElementById("wishlist" + item.id).submit(); setshowWishListmsg(true) }}><IoIosHeartEmpty className='col-logo' /></div>

                                        <form id={"compare" + item.id} method="post" action="http://localhost:4002/addCompare" >
                                            <input type="hidden" value={item.id} name="productid"></input>
                                        </form>
                                        <div onClick={() => { document.getElementById("compare" + item.id).submit(); setshowcomparemsg(true) }}>
                                            <CiRepeat className='col-logo' /></div>
                                    </div>

                                </div>

                            )

                        }
                        {showWishListmsg && (
                            <div className='wishlist-Msg'>
                                <label style={{ marginLeft: "20px" }}>Add to Wishlist</label>
                            </div>
                        )}
                        {showaddcartmsg && (
                            <div className='wishlist-Msg'>
                                <label style={{ marginLeft: "20px" }}>Cart item Added</label>
                            </div>
                        )}

                        {showcomparemsg && (
                            <div className='wishlist-Msg'>
                                <label style={{ marginLeft: "20px" }}>item add to Compare</label>
                            </div>
                        )}


                    </div>
                </div>

            </div>
            <div className='saver-foot-gap'></div>
            <div style={{ marginLeft: "20px" }}>
                <div class="row">
                    <div class="col">
                        <img src={b1} className='b1-style'></img>
                    </div>
                    <div class="col">
                        <img src={b2} className='b1-style'></img>
                    </div>
                    <div class="col">
                        <img src={b3} className='b1-style'></img>
                    </div>
                </div>
            </div>
            <div className='saver-foot-gap'></div>

        </div>
    )
}