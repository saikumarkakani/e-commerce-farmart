import '../Category/category.component.css';

import cate1 from '../../assets/cate1.png';
import cate2 from '../../assets/cate2.png';
import cate3 from '../../assets/cate3.png';
import cate4 from '../../assets/cate4.png';
import cate5 from '../../assets/cate5.png';
import cate6 from '../../assets/cate6.png';
import cate7 from '../../assets/cate7.png';
import Slider from 'react-slick';




export function Categories() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll:7,
    };
    return (
        <div className='cate-gap'>
            <div className='cate-text'>Browse by Category</div>
            <br></br>
            <div>
                <Slider {...settings} >
                    <div>
                        <div className='cate-box'>
                            <img src={cate1} className='cate-box-img'></img>
                            <div className='cate-box-text'>Fruits & Vegitables</div>
                        </div>
                    </div>
                    <div>
                    <div className='cate-box'>
                    <img src={cate2} className='cate-box-img'></img>
                    <div className='cate-box-text'>Fruits & Vegitables</div>
                </div>
                    </div>
                    <div>
                    <div className='cate-box'>
                    <img src={cate3} className='cate-box-img'></img>
                    <div className='cate-box-text'>Fruits & Vegitables</div>
                </div>
                    </div>
                    <div>
                    <div className='cate-box'>
                    <img src={cate4} className='cate-box-img'></img>
                    <div className='cate-box-text'>Fruits & Vegitables</div>
                </div>
                    </div>
                    <div>
                    <div className='cate-box'>
                    <img src={cate5} className='cate-box-img'></img>
                    <div className='cate-box-text'>Fruits & Vegitables</div>
                </div>
                    </div>
                    <div>
                    <div className='cate-box'>
                    <img src={cate6} className='cate-box-img'></img>
                    <div className='cate-box-text'>Fruits & Vegitables</div>
                </div>
                    </div>
                    <div>
                    <div className='cate-box'>
                    <img src={cate7} className='cate-box-img'></img>
                    <div className='cate-box-text'>Fruits & Vegitables</div>
                </div>
                    </div>
                </Slider>

            </div>
        <div style={{marginBottom:"30px"}}></div>







        
        </div>

    )
}