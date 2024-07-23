import { useForm } from 'react-hook-form';
import '../Just-LandProducts/addjustLand.component.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




export function AddJustLand() {

    const [ productImage, setproductimg] = useState();

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
        formData.append("newprice", data.newprice);
        formData.append("oldprice", data.oldprice);
        formData.append("offer", data.offer);
        formData.append("Quantity", data.Quantity);
        formData.append("productImage", productImage)

        const config = {
            header: { "content-Type": "multipart/form-data" }
        }
        const res = await axios.post("http://localhost:4002/savejustLand", formData, config);
        window.location.reload();
    }

    function loadImages(event) {
        var render = new FileReader();
        render.onload = function () {
            setproductimg(render.result);

        }
        render.readAsDataURL(event.target.files[0]);
    }

    return (

        <div >
            <div className='just-H-bg'>
            <Link to="/"><label className='store-H-text'>Home/</label></Link> 
                <label>Just Landing</label>
            </div>
            <br></br>

            <div className='addjusttext'>Add Just Landing Products</div>

            <form className='addjustProdct-form mt-5' onSubmit={handleSubmit((data) => { saveData(data) })}>

                <div>
                    <div><b>Product Name</b></div>
                    <input type="text" placeholder='Product Name..' className='form-control' {...register("productName")} />
                </div>
                <div>
                    <div><b>Product Details</b></div>
                    <input type="text" placeholder='Product Deatils..' className='form-control' {...register("productdetails")} />
                </div>
                <div>
                    <div><b>Product Old Price</b></div>
                    <input type="text" placeholder='Product New Price..' className='form-control' {...register("oldprice")} />
                </div>
                <div>
                    <div><b>Product New Price</b></div>
                    <input type="text" placeholder='Product Old Price..' className='form-control' {...register("newprice")} />
                </div>
             
                <div>
                    <div><b>Product Offer</b></div>
                    <input type="text" placeholder='Product Offer..' className='form-control' {...register("offer")} />
                </div>
                <div>
                    <div><b>Product Quantity</b></div>
                    <input type="text" placeholder='Product Quantity..' className='form-control' {...register("Quantity")} />
                </div>
        
        
                <div>
                    <div><b>Product Image</b></div>
                    <input type='file' className='form-control' {...register("productImage")} onChange={(event) => { loadImages(event) }} />
                </div>
                <div>
                    <input type="submit" value="Submit" className='btn addjustProdct-form-btn '  onClick={()=>{setAddproductmsg(true)}}/>
                 
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