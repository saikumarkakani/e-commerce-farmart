import '../Wish-List/wishlist.component.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import pic from '../../../assets/saver8.jpg';
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { getWishlistData } from '../../Service/wishlist.service';
import axios from 'axios';
import ModalPopup from '../../Shared-Component/modelPopup.component';
import { DeletePopup } from '../../Shared-Component/Delete-Popup/deletewishpop.component';





export function Wishlist() {

    //wishlist data 
    const [wishlistData, setwishlistData] = useState([]);

    //pagination
    const [PageSize, setPageSize] = useState(3);
    const [PageNumber, setPageNumber] = useState([]);
    const [TotalwishlistItem, setTotalwishlistList] = useState([]);

    //for delete
    const [showdeletePopup, setshowdeletePopup] = useState(false);
    const [deleteWishListId, setdeleteWishListId] = useState(0);

    useEffect(() => {
        getWishlistData().then((res) => {
            setTotalwishlistList(res.data);
            let pNumbers = Math.ceil(res.data.length / PageSize);
            let pNumberArrays = [];
            for (let i = 1; i <= pNumbers; i++) {
                pNumberArrays.push(i)
            }
            setPageNumber(pNumberArrays);
            let data = res.data.slice(0, PageSize);
            setwishlistData(res.data)
        })
    }, [])

    function gotoPage(num) {
        let startIndex = PageSize * (num - 1);
        let endIndex = PageSize * num;
        let res = TotalwishlistItem.slice(startIndex, endIndex);
        setwishlistData(res);
    }

    async function deletewishlistProduct() {
        if (deleteWishListId > 0) {
            const config = {
                headers: { "content-Type": "multipart/form-data" }
            };
            const newForm = new FormData();
            newForm.append("id", deleteWishListId);
            const res = await axios.post("http://localhost:4002/deleteWishlistItem", newForm, config);
            window.location.reload();
        };
    };


    return (
        <div>
            <div className='wishlist-text'>Wishlist</div>
            <br></br>
            <div className='wishlist-table'>
                <table class="table">
                    <thead>
                        <tr class="table-secondary">
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Stock status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlistData && wishlistData.map((item, index) =>

                                <tr>

                                    <td>
                                        <label>
                                            {
                                                item.productImage && <img src={item.productImage} className='wishlistimg'></img>
                                            }
                                            {
                                                !item.productImage && <img src={pic} className='wishlistimg'></img>
                                            }
                                        </label>
                                        <label>
                      <div className='wishlist-box-text'>{item.productName}</div>
                  <div className='wishlist-box-text1'>Vendor: <span className='wishlist-box-text2'>{item.productdetails}</span></div>
                     <div className='wishlist-box-text3'>(Boxes: 3 Boxes, Weight: 4KG)
                                            </div>
                                        </label>
                                    </td>
                                    <td><b>${item.newprice}</b>&nbsp;&nbsp;<del>${item.oldprice}</del></td>
                                    <td style={{ color: "green" }}><b>In Stock</b></td>
                                    <td>
                                        <div>
                                            <button className='wishlist-addcart'><IoCartOutline className='wishlist-button-cart' />Add Cart</button>
                                        </div>
                                    </td>
                                    <td><RiDeleteBin6Line style={{ width: "25px", height: "30px", marginLeft: "70px" }} onClick={() => { setdeleteWishListId(item.id); setshowdeletePopup(true) }} /></td>
                                </tr>


                            )


                        }


                    </tbody>
                    <br></br>

                </table>
                <div class="pagination">

                    {
                        PageNumber && PageNumber.map((item) =>
                            <button class="page-btn active" onClick={() => { gotoPage(item) }}>{item}</button>
                        )
                    }
                </div>
            </div>

            <div>
                <ModalPopup open={showdeletePopup} title={"Delete WishList Item"} closeModal={() => { setshowdeletePopup(false) }}>
                    <DeletePopup deleteWishListItem={() => { deletewishlistProduct(); setshowdeletePopup(false) }}></DeletePopup>
                </ModalPopup>

            </div>
        </div>
    )
}