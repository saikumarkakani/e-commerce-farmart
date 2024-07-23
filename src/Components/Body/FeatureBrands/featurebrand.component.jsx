import '../FeatureBrands/featurebrand.component.css';
import f1 from '../../../assets/F-1.png';
import f2 from '../../../assets/F-2.png';
import f3 from '../../../assets/F-3.png';
import f4 from '../../../assets/F-4.png';





export function FeatureBrands(){
    return(
        <div className='feat-gap'>
              <div className='feat-text'>Featured Brands</div>
              <div className='d-flex'>
              <div className='feat-box'>
                <img src={f1} className='feat-img'></img>
                
                    <div className='feat-box-text'>Food Pound</div>
                    <div className='feat-box-texts'>New Snacks Release</div>
            </div>
            <div className='feat-box'>
                <img src={f2} className='feat-img'></img>
                
                    <div className='feat-box-text'>ITEA JSC</div>
                    <div className='feat-box-texts'>Happy Tea 100% Organic.Form $29.9</div>
            </div>
            <div className='feat-box'>
                <img src={f3} className='feat-img'></img>
                
                    <div className='feat-box-text'>SODA BRAND</div>
                    <div className='feat-box-texts'>Fresh Meat Sausage. BUY 2 GET 1!</div>
            </div>
            <div className='feat-box'>
                <img src={f4} className='feat-img'></img>
                
                    <div className='feat-box-text'>FARMART</div>
                    <div className='feat-box-texts'>Fresh Meat Sausage.BUY 2 GET 1!</div>
            </div>
            

              </div>
            



<br></br>
<br></br>
<br></br>
        </div>
    );
}