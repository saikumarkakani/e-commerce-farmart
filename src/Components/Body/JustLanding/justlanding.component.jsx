import '../JustLanding/justlanding.component.css';
import jl1 from '../../../assets/jl1.jpg';
import jl2 from '../../../assets/jl-2.jpg';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiRepeat } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { getjustLand } from '../../Service/justland.service';
import store from '../../Service/reduxStore.service';






export function JustLanding() {
    //create state varible for products
    const [justLand, setjustLand] = useState([]);

       //for wishlistmsg popup
       const [showWishListmsg, setshowWishListmsg] = useState(false);
       //for addcartmsg popup
       const [showaddcartmsg, setshowaddcartmsg] = useState(false);
         //for comparemsg popup
    const [showcomparemsg, setshowcomparemsg] = useState(false);

    //use effect for api call
    useEffect(() => {
        getjustLand().then((res) => {
            setjustLand(res.data);
        });
        store.subscribe(()=>{
            const products = store.getState().products;
            setjustLand(products);
            
        })
    }, []);

        //for increment
        function Justsincrement(item, index) {

            let data = JSON.parse(JSON.stringify(justLand));
            data[index].Quantity = item.Quantity + 1;
            setjustLand(data);
    
        }
        //for decrement
        function Justdecrement(item, index) {
            if (item.Quantity > 0) {
                let data = JSON.parse(JSON.stringify(justLand));
                data[index].Quantity = item.Quantity - 1;
                setjustLand(data);
            }
        }
    


    return (
        <div>
            <div className='just-textH'>Just Landing</div>

            <div className='d-flex' style={{marginLeft:"20px"}}>
                {
                    justLand && justLand.map((item, index) =>
                        <div className="just">
                            <div className='just-offer-strip'>{item.offer}%</div>
                      
                            
                            <div>
                                {
                                  item.productImage &&  <img src={item.productImage} className='just-img'></img>
                                }
                                  {
                                  !item.productImage &&  <img src={jl2} className='just-img'></img>
                                }
                               
                            </div>
                            <div className='just-text'>{item.productName}</div>
                            <div className='just-text1'>{item.productdetails}</div>
                            <div style={{ marginLeft: "20px" }}>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star empty">&#9733;</span>
                                <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                <span>(7)</span>
                            </div>
                            <div>
                                <label className='just-priceG'>{item.newprice * item.Quantity}</label>&nbsp;&nbsp;
                                <label><del>{item.oldprice}</del></label>
                            </div>
                            <div class="rating-line"></div>
                            <div className='sold-style'> Sold: 4/12</div>
                            <div class="just-submenu" style={{ borderTop: "none" }}>
                                <div>
                                    <div className='plussymbols'>
                                        <label style={{ marginLeft: "10px" }}>
                                            <FaMinus onClick={()=>{Justdecrement(item,index)}} />
                                        </label>
                                        <span style={{ padding: "20px" }}>{item.Quantity}</span>
                                        <label>
                                            <FaPlus onClick={()=>{Justsincrement(item,index)}} />
                                        </label>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                <form id={"addcart" + item.id} method="post" action="http://localhost:4002/addcart" >
                                                <input type="hidden" value={item.id} name="productid"></input>
                                            </form>
                                    <button className='just-addcart'  onClick={() => { document.getElementById("addcart" + item.id).submit(); setshowaddcartmsg(true) }}><IoCartOutline className='just-button-cart'  />Add Cart</button>
                                </div>
                            </div>
                            <div class="just-hover-submenu">
                                <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                <form id={"wishlist" + item.id} method="post" action="http://localhost:4002/addWishList" >
                                            <input type="hidden" value={item.id} name="productid"></input>
                                        </form>
                                <div><IoIosHeartEmpty className='col-logo2' onClick={() => { document.getElementById("wishlist" + item.id).submit(); setshowWishListmsg(true) }}/></div>
                                
                                <form id={"compare" + item.id} method="post" action="http://localhost:4002/addCompare" >
                                            <input type="hidden" value={item.id} name="productid"></input>
                                        </form>
                                <div onClick={() => { document.getElementById("compare" + item.id).submit(); setshowcomparemsg(true) }}><CiRepeat className='col-logo2' /></div>

                            </div>

                        </div>

                    )
                }
                    {showWishListmsg && (
                            <div className='wishlist-Msg'>
                                <label style={{marginLeft:"20px"}}>Add to Wishlist</label>
                            </div>
                        )}
                        {showaddcartmsg && (
                            <div className='wishlist-Msg'>
                                <label style={{marginLeft:"20px"}}>Cart item Added</label>
                            </div>
                        )}
                             {showcomparemsg && (
                            <div className='wishlist-Msg'>
                                <label style={{ marginLeft: "20px" }}>item add to Compare</label>
                            </div>
                        )}




            </div>




          <div style={{marginBottom:"90px"}}></div>


        </div>



    )
}




