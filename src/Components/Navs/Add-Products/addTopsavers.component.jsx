import { useForm } from 'react-hook-form';
import '../Add-Products/addTopsavers.component.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export function AddTosavers() {

    const [productImage, setproductImage] = useState()
 //for Add Product msg popup
 const [Addproductmsg, setAddproductmsg] = useState(false);

    const {
        register,
        handleSubmit
    } = useForm();

    async function saveData(data) {
        let formData = new FormData();

        formData.append("productName", data.productName);
        formData.append("productdetails", data.productdetails);
        formData.append("oldprice", data.oldprice);
        formData.append("newprice", data.newprice);
        formData.append("offer", data.offer);
        formData.append("Quantity", data.Quantity);
        formData.append("productImage",productImage)
        

        const config = {
            header: { "content-Type": "multipart/form-data" }
        }
        const res = await axios.post("http://localhost:4002/saveTopsavers", formData, config);
        window.location.reload();
    }

    function loadImages(event) {
        var render = new FileReader();
        render.onload= function () {
            setproductImage(render.result);

        }
        render.readAsDataURL(event.target.files[0]);
    }

    return (

        <div >
            <div className='store-H-bg'>
            <Link to="/"><label className='store-H-text'>Home/</label></Link> 
                <label>Saver Today</label>
            </div>
            <br></br>

            <div className='addtext'>Add Top Savers Products</div>

            <form className='addProdct-form mt-5' onSubmit={handleSubmit((data) => { saveData(data) })}>

                <div>
                    <div><b>Product Name</b></div>
                    <input type="text" placeholder='Product Name..' className='form-control' {...register("productName")} />
                </div>
                <div>
                    <div><b>Product Details</b></div>
                    <input type="text" placeholder='Product Details..' className='form-control' {...register("productdetails")} />
                </div>
                <div>
                    <div><b>Product Old Price</b></div>
                    <input type="text" placeholder='Product Old Price..' className='form-control' {...register("oldprice")} />
                </div>
                <div>
                    <div><b>Product New Price</b></div>
                    <input type="text" placeholder='Product New Price..' className='form-control' {...register("newprice")} />
                </div>
                <div>
                    <div><b>Product Offer</b></div>
                    <input type="text" placeholder='Product Offer..' className='form-control' {...register("offer")} />
                </div>
                <div>
                    <div><b>Product Quantity</b></div>
                    <input type="number" placeholder='Product Quantity..' className='form-control' {...register("Quantity")} />
                </div>
                <div>
                    <div><b>Product Image</b></div>
                    <input type='file' className='form-control' {...register("productImage")} onChange={(event) => { loadImages(event) }} />
                </div>
                <div>
                    <input type="submit" value="Submit" className='btn addProdct-form-btn '  onClick={()=>{setAddproductmsg(true)}}/>
                 
                </div>
            </form>

            {Addproductmsg && (
                            <div className='wishlist-Msg'>
                                <label style={{ marginLeft: "20px" }}>Product Add successfully </label>
                            </div>
                        )}

        </div>



    );

}