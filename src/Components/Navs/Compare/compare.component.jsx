import '../Compare/compare.component.css';
import pic from '../../../assets/jl-2.jpg';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TfiMinus } from "react-icons/tfi";
import { useEffect, useState } from 'react';
import { getcompareData } from '../../Service/compare.service';
import axios from 'axios';
import ModalPopup from '../../Shared-Component/modelPopup.component';
import { DeletePopup } from '../../Shared-Component/Delete-Popup/deleteCompare.component';
import { Link } from 'react-router-dom';

export function Compare() {

    const [comapreData, setcompareData] = useState([]);

    //for delete
    const [showdeletePopup, setshowdeletePopup] = useState(false);
    const [deleteCompareId, setdeleteCompareId] = useState(0);


    useEffect(() => {
        getcompareData().then((res) => {
            setcompareData(res.data);
        })
    }, [])

    async function deleteCompareProduct() {
        if (deleteCompareId > 0) {
            const config = {
                headers: { "content-Type": "multipart/form-data" }
            };
            const newForm = new FormData();
            newForm.append("id", deleteCompareId);
            const res = await axios.post("http://localhost:4002/deleteCompareItem", newForm, config);
            window.location.reload();
        };
    };


        //for increment
        function Compareincrement(item, index) {

            let data = JSON.parse(JSON.stringify(comapreData));
            data[index].Quantity = item.Quantity + 1;
            setcompareData(data);
    
        }
        //for decrement
        function Comparedecrement(item, index) {
            if (item.Quantity > 0) {
                let data = JSON.parse(JSON.stringify(comapreData));
                data[index].Quantity = item.Quantity - 1;
                setcompareData(data);
            }
        }
    




    return (
        <div>
            <div className='store-H-bg'>
               <Link to="/"><label className='store-H-text'>Home/</label></Link> 
                <label>Compare</label>
            </div>
            <br></br>

            <div className='addtext'>Compare</div>
            <div className="container mt-4">
                <div className="rows">
                    <div className="col">
                        <table className="table table-bordered vertical-table ">

                            <thead>
                                <tr className='rows'>
                                <th className='tth t1'></th>
                                <th className='tth'>Title</th>
                                <th className='tth'>Price</th>
                                <th className='tth'>Add to cart</th>
                                <th className='tth'>Description</th>
                                <th className='tth'>SKU</th>
                                <th className='tth'>Availability</th>
                                <th className='tth'>Color</th>
                                <th className='tth'>Weight</th>
                                <th className='tth'>Size</th>
                                <th className='tth'>Boxes</th>
                                <th className='tth'></th>
                                </tr>
                               
                            </thead>
                            {
                                comapreData && comapreData.map((item, index) =>

                                    <tbody >
                                        <tr>
                                            
                                            <td>
                                                <label>
                                                    {
                                                        item.productImage && <img src={item.productImage} className='compareimg'></img>
                                                    }
                                                    {
                                                        !item.productImage && <img src={pic} className='compareimg'></img>
                                                    }
                                                </label>

                                            </td>


                                        </tr>
                                        <tr>
                                          
                                            <td className='tds'><b style={{color:'orange',marginLeft:"30px"}}>{item.productName}</b></td>

                                        </tr>
                                        <tr>
                                         
                                            <td><b style={{marginLeft:"30px"}}>${item.newprice * item.Quantity}</b>&nbsp;&nbsp;<del>${item.oldprice}</del></td>

                                        </tr>
                                        <tr>
                                         
                                            <td>
                                                <label style={{ border: '1px solid #ccc', padding: '3px', borderRadius: '2px', display: 'inline-block', width: '110px', height:"33px" }}>
                                                    <label style={{ marginLeft: "20px" }} >
                                                        <FaMinus onClick={() => { Comparedecrement(item, index) }}  />
                                                    </label>
                                                    <span style={{ padding: "10px" }}>{item.Quantity}</span>
                                                    <label>
                                                        <FaPlus onClick={() => { Compareincrement(item, index) }}/>
                                                    </label>

                                                </label>
                                                <label>
                                                    <button className='compare-addcart'><IoCartOutline className='compare-button-cart' />Add Cart</button>
                                                </label>
                                            </td>

                                        </tr>
                                        <tr>
                                          
                                            <td>
                                              <label style={{color:'blue'}}>{item.productdetails}</label> 
                                            </td>

                                        </tr>
                                        <tr>
                                          
                                            <td>
                                               <label style={{marginLeft:"30px"}}>#FZ-196-A1</label> 
                                            </td>

                                        </tr>
                                        <tr>
                                         
                                            <td>

                                                <label className='instock' style={{marginLeft:"30px"}}>In Stock</label>
                                            </td>
                                        </tr>
                                        <tr>
                                         
                                            <td>
                                                <label class="circle black"></label>
                                                <label class="circle red"></label>
                                                <label class="circle green"></label>

                                            </td>
                                        </tr>
                                        <tr>
                                      
                                            <td>
                                                <label style={{ marginLeft: "20px" }}><TfiMinus /></label>
                                            </td>
                                        </tr>
                                        <tr>
                                           
                                            <td>
                                                <label className='size-Cbox'>S</label>
                                                <label className='size-Cbox'>M</label>
                                                <label className='size-Cbox'>L</label>
                                            </td>
                                        </tr>
                                        <tr>
                                       
                                            <td><label style={{ marginLeft: "20px" }}><TfiMinus /></label></td>
                                        </tr>
                                        <tr>
                                        
                                                <td><RiDeleteBin6Line style={{ width: "25px", height: "30px", marginLeft: "30px" }} onClick={() => { setdeleteCompareId(item.id); setshowdeletePopup(true) }} /></td>
                                            
                                        </tr>

                                    </tbody>




                                )
                            }

                        </table>
                    </div>
                </div>
            </div>
            <div>
                <ModalPopup open={showdeletePopup} title={"Delete Compare Item"} closeModal={() => { setshowdeletePopup(false) }}>
                    <DeletePopup deletecompareItem={() => { deleteCompareProduct(); setshowdeletePopup(false) }}></DeletePopup>
                </ModalPopup>

            </div>


        <div style={{marginBottom:"100px"}}></div>

        </div>
    )
}