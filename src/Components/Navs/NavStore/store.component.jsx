import { BsGeoAlt, BsShop, BsSliders2Vertical, BsTelephone } from 'react-icons/bs';
import '../NavStore/store.component.css';
import { BsList } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { BiEnvelope } from 'react-icons/bi';
import Store1 from '../../../assets/store.png';
import Store2 from '../../../assets/store2.png';
import Store3 from '../../../assets/store3.png';
import Store4 from '../../../assets/store4.png';
import Store5 from '../../../assets/store5.png';
import Store6 from '../../../assets/store6.png';
import Store7 from '../../../assets/store7.png';
import Store8 from '../../../assets/store8.png';
import { Link } from 'react-router-dom';



export function NavStores() {
    return (
        <div>
            <div className='store-H-bg'>
            <Link to ="/"><label className='store-H-text'>Home/</label></Link>
                <label>Store</label>
            </div>
            <br></br>

            <div className='store-text'>Stores</div>
            <div className='store-text-box'>
                <label className='store-text-box-txt'>Total stores showing: 8</label>
                <label className='store-icon-gap'>
                    <label className='store-icon-box'><BsSliders2Vertical className='storeicon'></BsSliders2Vertical><b>Filter</b></label>
                    <label><LuLayoutGrid className='storeicon1' style={{ color: "orange" }} /></label>
                    <label><BsList className='storeicon1' /></label>
                </label>

            </div>
            <br></br>
            {/* <div  className='store-text-box1'>
<input type= "text" placeholder='Search Store.....' className='store-input'></input><span>Apply</span>
            </div> */}


            <div>

                <div className='d-flex'>
                    <div className="store-m-box">
                        <div>
                            <img src={Store1} className='store-img'></img>
                        </div>
                        <div className='text-gap'>
                        <div className='s-text'>GoPro</div>

                        <div style={{ marginLeft: "20px" }}>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star empty">&#9733;</span>
                            <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                            <span>(7)</span>
                        </div>
                        <div>
                            <div><BsGeoAlt></BsGeoAlt>  5035 Kemmer Rapid Suite 322, Sawaynstad, Wisconsin, BZ</div>
                            <div><BsTelephone></BsTelephone> +12609007046</div>
                            <div><BiEnvelope></BiEnvelope> mae06@example.com</div>
                        </div>
                        </div>
                        <div>
                            <hr></hr>
                            <button className='btn-visit'><BsShop></BsShop> Visit Store</button>
                        </div>

                    </div>

                    <div className="store-m-box">
                        <div>
                            <img src={Store2} className='store-img'></img>
                        </div>
                        <div className='text-gap'>
                        <div className='s-text'>GoPro</div>

                        <div style={{ marginLeft: "20px" }}>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star empty">&#9733;</span>
                            <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                            <span>(7)</span>
                        </div>
                        <div>
                            <div><BsGeoAlt></BsGeoAlt>  5035 Kemmer Rapid Suite 322, Sawaynstad, Wisconsin, BZ</div>
                            <div><BsTelephone></BsTelephone> +12609007046</div>
                            <div><BiEnvelope></BiEnvelope> mae06@example.com</div>
                        </div>
                        </div>
                        <div>
                            <hr></hr>
                            <button className='btn-visit'><BsShop></BsShop> Visit Store</button>
                        </div>

                    </div>

                    <div className="store-m-box">
                        <div>
                            <img src={Store3} className='store-img'></img>
                        </div>
                        <div className='text-gap'>
                        <div className='s-text'>GoPro</div>

                        <div style={{ marginLeft: "20px" }}>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star empty">&#9733;</span>
                            <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                            <span>(7)</span>
                        </div>
                        <div>
                            <div><BsGeoAlt></BsGeoAlt>  5035 Kemmer Rapid Suite 322, Sawaynstad, Wisconsin, BZ</div>
                            <div><BsTelephone></BsTelephone> +12609007046</div>
                            <div><BiEnvelope></BiEnvelope> mae06@example.com</div>
                        </div>
                        </div>
                        <div>
                            <hr></hr>
                            <button className='btn-visit'><BsShop></BsShop> Visit Store</button>
                        </div>



                    </div>
                    <div className="store-m-box">
                        <div>
                            <img src={Store4} className='store-img'></img>
                        </div>
                        <div className='text-gap'>
                        <div className='s-text'>GoPro</div>

                        <div style={{ marginLeft: "20px" }}>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star empty">&#9733;</span>
                            <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                            <span>(7)</span>
                        </div>
                        <div>
                            <div><BsGeoAlt></BsGeoAlt>  5035 Kemmer Rapid Suite 322, Sawaynstad, Wisconsin, BZ</div>
                            <div><BsTelephone></BsTelephone> +12609007046</div>
                            <div><BiEnvelope></BiEnvelope> mae06@example.com</div>
                        </div>
                        </div>
                        <div>
                            <hr></hr>
                            <button className='btn-visit'><BsShop></BsShop> Visit Store</button>
                        </div>
                    </div>
                
                </div>
                <div className='d-flex'>
                    <div className="store-m-box">
                        <div>
                            <img src={Store5} className='store-img'></img>
                        </div>
                        <div className='text-gap'>
                        <div className='s-text'>GoPro</div>

                        <div style={{ marginLeft: "20px" }}>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star empty">&#9733;</span>
                            <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                            <span>(7)</span>
                        </div>
                        <div>
                            <div><BsGeoAlt></BsGeoAlt>  5035 Kemmer Rapid Suite 322, Sawaynstad, Wisconsin, BZ</div>
                            <div><BsTelephone></BsTelephone> +12609007046</div>
                            <div><BiEnvelope></BiEnvelope> mae06@example.com</div>
                        </div>
                        </div>
                        <div>
                            <hr></hr>
                            <button className='btn-visit'><BsShop></BsShop> Visit Store</button>
                        </div>

                    </div>

                    <div className="store-m-box">
                        <div>
                            <img src={Store6} className='store-img'></img>
                        </div>
                        <div className='text-gap'>
                        <div className='s-text'>GoPro</div>

                        <div style={{ marginLeft: "20px" }}>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star empty">&#9733;</span>
                            <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                            <span>(7)</span>
                        </div>
                        <div>
                            <div><BsGeoAlt></BsGeoAlt>  5035 Kemmer Rapid Suite 322, Sawaynstad, Wisconsin, BZ</div>
                            <div><BsTelephone></BsTelephone> +12609007046</div>
                            <div><BiEnvelope></BiEnvelope> mae06@example.com</div>
                        </div>
                        </div>
                        <div>
                            <hr></hr>
                            <button className='btn-visit'><BsShop></BsShop> Visit Store</button>
                        </div>

                    </div>

                    <div className="store-m-box">
                        <div>
                            <img src={Store7} className='store-img'></img>
                        </div>
                        <div className='text-gap'>
                        <div className='s-text'>GoPro</div>

                        <div style={{ marginLeft: "20px" }}>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star empty">&#9733;</span>
                            <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                            <span>(7)</span>
                        </div>
                        <div>
                            <div><BsGeoAlt></BsGeoAlt>  5035 Kemmer Rapid Suite 322, Sawaynstad, Wisconsin, BZ</div>
                            <div className='Sbox-text'><BsTelephone></BsTelephone> +12609007046</div>
                            <div className='Sbox-text'><BiEnvelope></BiEnvelope> mae06@example.com</div>
                        </div>
                        </div>
                        <div>
                            <hr></hr>
                            <button className='btn-visit'><BsShop></BsShop> Visit Store</button>
                        </div>



                    </div>
                    <div className="store-m-box">
                        <div>
                            <img src={Store8} className='store-img'></img>
                        </div>
                        <div className='text-gap'>
                        <div className='s-text'>GoPro</div>

                        <div style={{ marginLeft: "20px" }}>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star empty">&#9733;</span>
                            <span class="star empty">&#9733;</span>&nbsp;&nbsp;&nbsp;

                            <span>(7)</span>
                        </div>
                        <div>
                            <div><BsGeoAlt></BsGeoAlt>  5035 Kemmer Rapid Suite 322, Sawaynstad, Wisconsin, BZ</div>
                            <div><BsTelephone></BsTelephone> +12609007046</div>
                            <div><BiEnvelope></BiEnvelope> mae06@example.com</div>
                        </div>
                        </div>
                        <div>
                            <hr></hr>
                            <button className='btn-visit'><BsShop></BsShop> Visit Store</button>
                        </div>
                    </div>
                
                </div>





            </div>
        </div>
    )
}