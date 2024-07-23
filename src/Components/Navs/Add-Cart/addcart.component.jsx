import '../Add-Cart/addcart.component.css';
import pic from '../../../assets/saver5.jpg';
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineHome } from "react-icons/hi2";
import { BiArrowBack } from 'react-icons/bi';
import saver1 from '../../../assets/jl1.jpg';
import saver2 from '../../../assets/fp1.jpg';
import saver3 from '../../../assets/jl-2.jpg';
import saver4 from '../../../assets/saver7.jpg';
import saver5 from '../../../assets/saver8.jpg';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiRepeat } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { getaddCartData } from '../../Service/addcart.service';
import axios from 'axios';
import ModalPopup from '../../Shared-Component/modelPopup.component';
import { DeleteAddcart } from '../../Shared-Component/Delete-Popup/deletecartpop.component';





export function Cart() {

    const [addCartData, setaddCartData] = useState([]);

    //pagination
    const [PageSize, setPageSize] = useState(3);
    const [PageNumber, setPageNumber] = useState([]);
    const [TotaladdcartItem, setTotaladdcartList] = useState([]);
    //for addcart delete
    const [ShowDeletepopup, setShowDeletepopup] = useState(false);
    const [deleteAddcartItem, setdeleteAddcartItem] = useState(0);



    useEffect(() => {
        getaddCartData().then((res) => {
            setTotaladdcartList(res.data);
            let pNumbers = Math.ceil(res.data.length / PageSize);
            let pNumberArrays = [];
            for (let i = 1; i <= pNumbers; i++) {
                pNumberArrays.push(i)
            }
            setPageNumber(pNumberArrays);
            let data = res.data.slice(0, PageSize);

            setaddCartData(data);
        })

    }, [])

    function gotoPage(num) {
        let startIndex = PageSize * (num - 1);
        let endIndex = PageSize * num;
        let res = TotaladdcartItem.slice(startIndex, endIndex);
        setaddCartData(res);
    }



    //for increment
    function Addcartincrement(item, index) {

        let data = JSON.parse(JSON.stringify(addCartData));
        data[index].Quantity = item.Quantity + 1;
        setaddCartData(data);

    }
    //for decrement
    function AddCartdecrement(item, index) {
        if (item.Quantity > 0) {
            let data = JSON.parse(JSON.stringify(addCartData));
            data[index].Quantity = item.Quantity - 1;
            setaddCartData(data);
        }
    }

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


    return (
        <div>
            <div className='cart-text'>Shopping Cart</div>
            <br></br>
            <div className='cart-table'>
                <table class="table">
                    <thead>
                        <tr class="table-secondary">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            addCartData && addCartData.map((item, index) =>
                                <tr>

                                    <td>

                                    <label>
                                        {
                                            item.productImage  && <img src={item.productImage} className='cartimg'></img>
                                        }
                                        {
                                            !item.productImage && <img src={pic} className='cartimg'></img>
                                        }

                                    </label>
                            
                                        <label>
                                            <div className='cart-box-text'>{item.productName}</div>
                                            <div className='cart-box-text1'>Vendor: <span className='cart-box-text2'>{item.productdetails}</span></div>
                                            <div className='cart-box-text3'>(Boxes: 3 Boxes, Weight: 4KG)
                                            </div>
                                        </label>
                                    </td>
                                    <td><b>${item.newprice}</b></td>
                                    <td>
                                        <div style={{ border: '1px solid #ccc', padding: '6px', borderRadius: '2px', display: 'inline-block', width: '120px' }}>
                                            <label style={{ marginLeft: "20px" }} >
                                                <FaMinus onClick={() => { AddCartdecrement(item, index) }} />
                                            </label>
                                            <span style={{ padding: "10px" }}>{item.Quantity}</span>
                                            <label>
                                                <FaPlus onClick={() => { Addcartincrement(item, index) }} />
                                            </label>
                                        </div>
                                    </td>
                                    <td><b> ${item.newprice * item.Quantity}</b></td>
                                    <td><RiDeleteBin6Line style={{ width: "25px", height: "35px" }} onClick={()=>{setdeleteAddcartItem(item.id); setShowDeletepopup(true)}} /></td>
                                </tr>
                            )}

                    </tbody>
                    <br></br>

                </table>


                <br></br>

                <div>
                    <div class="pagination">

                        {
                            PageNumber && PageNumber.map((item) =>
                                <button class="page-btn active" onClick={() => { gotoPage(item) }}>{item}</button>
                            )
                        }
                    </div>

                    <label className="cart-box"><BiArrowBack className='cart-icon-box'></BiArrowBack><b>Continue Shopping</b> </label>
                    <label className="cart-box1"><HiOutlineHome className='cart-icon-box1' /> <b>Back to home</b></label>
                </div>
                <div>
                <ModalPopup open={ShowDeletepopup} title={"AddCart Delete Item"} closeModal={() => { setShowDeletepopup(false) }} >
                <DeleteAddcart deleteAddCartId = {()=>{deleteAddcartProduct(); setShowDeletepopup(false)}}></DeleteAddcart>
                </ModalPopup>
            </div>

            </div>

            <div className='cart-table'>
                <hr></hr>
                <div class="row">
                    <div class="col-8">
                        <div>
                            <div className='promocode-text'>Using A Promo Code?</div>
                            <div>
                                <label> <input type='text' placeholder='Enter Coupon Code' className='coupon-search'></input></label>
                                <label className='apply-btn'>Apply</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div className='cart-total-box'>
                            <div className='cart-total-box-text'>Cart totals</div>
                            <div>
                                <label className='cart-total-smalltext'>Subtotal:</label>
                                <label className='sub-text'>$300</label>
                            </div>
                            <hr></hr>
                            <div>
                                <label className='cart-total-smalltext'>Tax:</label>
                                <label className='sub-text1'>$33</label>
                            </div>
                            <hr></hr>
                            <div>
                                <label className='cart-total-smalltext'>Total:</label>

                                <label className='sub-text2'>$333</label>
                                <div className='cart-box-smalltxt'>(Shipping fees not included)</div>
                            </div>
                            <div className='proceed-style'>Proceed to checkout </div>

                        </div>
                    </div>
                </div>
                <div>
                    <br></br>
                    <div className='cust-text-style'>Customers who bought this item also bought</div>
                    <br></br>
                    <div>

                        <div>
                            <div class="row" style={{ marginLeft: "10px" }}>
                                <div class="col cart-pro-col">
                                    <div className='offer-strip1'>Seal</div>
                                    <div>
                                        <img src={saver1} className='cart-pro-img'></img>
                                    </div>
                                    <div className='cart-pro-text'>Roberts Stores</div>
                                    <div className='cart-pro-text1'>Red & Black Headphone (Degital)</div>
                                    <div style={{ marginLeft: "20px" }}>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star empty">&#9733;</span>
                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                        <span>(7)</span>
                                    </div>
                                    <div>
                                        <label className='cart-pro-priceG'>$280.10</label>
                                    </div>
                                    <div class="rating-line"></div>
                                    <div className='sold-style'> Sold: 4/12</div>
                                    <div class="cart-pro-submenu" style={{ borderTop: "none" }}>
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
                                            <button className='cart-pro-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                        </div>
                                    </div>
                                    <div class="cart-pro-hover-submenu1">
                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                        <div><CiRepeat className='col-logo2' /></div>

                                    </div>

                                </div>
                                <div class="col cart-pro-col">
                                    <div>
                                        <img src={saver2} className='cart-pro-img'></img>
                                    </div>
                                    <div className='cart-pro-text'>Roberts Stores</div>
                                    <div className='cart-pro-text1'>Red & Black Headphone (Degital)</div>
                                    <div style={{ marginLeft: "20px" }}>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star empty">&#9733;</span>
                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                        <span>(7)</span>
                                    </div>
                                    <div>
                                        <label className='cart-pro-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                                    </div>
                                    <div class="rating-line"></div>
                                    <div className='sold-style'> Sold: 4/12</div>
                                    <div class="cart-pro-submenu" style={{ borderTop: "none" }}>
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
                                            <button className='cart-pro-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                        </div>
                                    </div>
                                    <div class="cart-pro-hover-submenu1">
                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                        <div><CiRepeat className='col-logo2' /></div>

                                    </div>
                                </div>
                                <div class="col cart-pro-col">
                                    <div>
                                        <img src={saver3} className='cart-pro-img'></img>
                                    </div>
                                    <div className='cart-pro-text'>Roberts Stores</div>
                                    <div className='cart-pro-text1'>Red & Black Headphone (Degital)</div>
                                    <div style={{ marginLeft: "20px" }}>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star empty">&#9733;</span>
                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                        <span>(7)</span>
                                    </div>
                                    <div>
                                        <label className='cart-pro-priceG'>$280.10</label>
                                    </div>
                                    <div class="rating-line"></div>
                                    <div className='sold-style'> Sold: 4/12</div>
                                    <div class="cart-pro-submenu" style={{ borderTop: "none" }}>
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
                                            <button className='cart-pro-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                        </div>
                                    </div>
                                    <div class="cart-pro-hover-submenu1">
                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                        <div><CiRepeat className='col-logo2' /></div>

                                    </div>
                                </div>
                                <div class="col cart-pro-col">
                                    <div>
                                        <img src={saver4} className='cart-pro-img'></img>
                                    </div>
                                    <div className='cart-pro-text'>Roberts Stores</div>
                                    <div className='cart-pro-text1'>Red & Black Headphone (Degital)</div>
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
                                    <div class="cart-pro-submenu" style={{ borderTop: "none" }} >
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
                                            <button className='cart-pro-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                        </div>
                                    </div>
                                    <div class="cart-pro-hover-submenu1">
                                        <div><MdOutlineZoomOutMap className='col-logo2' /></div>
                                        <div><IoIosHeartEmpty className='col-logo2' /></div>
                                        <div><CiRepeat className='col-logo2' /></div>

                                    </div>
                                </div>
                                <div class="col cart-pro-col">
                                    <div>
                                        <img src={saver5} className='cart-pro-img'></img>
                                    </div>
                                    <div className='cart-pro-text'>Roberts Stores</div>
                                    <div className='cart-pro-text1'>Red & Black Headphone (Degital)</div>
                                    <div style={{ marginLeft: "20px" }}>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star empty">&#9733;</span>
                                        <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                                        <span>(7)</span>
                                    </div>
                                    <div>
                                        <label className='cart-pro-price'>$280.10</label>&nbsp;&nbsp;<del>$580.10</del>
                                    </div>
                                    <div class="rating-line"></div>
                                    <div className='sold-style'> Sold: 4/12</div>
                                    <div class="cart-pro-submenu" style={{ borderTop: "none" }}>
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
                                            <button className='cart-pro-addcart'><IoCartOutline className='button-cart' />Add Cart</button>
                                        </div>
                                    </div>
                                    <div class="cart-pro-hover-submenu1">
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
    )
}


