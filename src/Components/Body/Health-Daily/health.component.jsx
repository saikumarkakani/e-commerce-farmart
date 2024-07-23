import '../Health-Daily/health.component.css';
import { IoIosArrowForward } from "react-icons/io";
import health1 from '../../../assets/heath-1.jpg';
import health2 from '../../../assets/health2.jpg';
import ss from '../../../assets/ss.png';




export function HealthDaily() {
    return (
        <div className='bg'>
            <div>
                <div class="row">
                    <div class="col-8">
                        <div>
                            <label className='health-font'>Health Daily</label>
                            <label className='health-up-gap'>All Articals</label><IoIosArrowForward />

                        </div>
                        <br></br>
                        <div className='col-bg'>
                            <div style={{ marginLeft: '20px' }}>
                                <div class="row">
                                    <div class="col">
                                        <img src={health1} className='health-pic'></img><br></br>
                                        <br></br>
                                        <div>By <b>uriel Krajcik</b>in <b>Fashion</b> on Mar 28, 2024</div>

                                        <div className='health-pic-text'>The Worlds Caters to Average People</div><br></br>
                                        <div>You shoud pay more attention when you choose your wallets. There are a lot of them on the market with .....</div>
                                    </div>
                                    <div class="col">
                                        <img src={health2} className='health-pic'></img><br></br>
                                        <br></br>
                                        <div>By <b>uriel Krajcik</b>in <b>Fashion</b> on Mar 28, 2024</div>

                                        <div className='health-pic-text'>The Worlds Caters to Average People</div><br></br>
                                        <div>You shoud pay more attention when you choose your wallets. There are a lot of them on the market with .....</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="col-4">
                        <img src={ss} className='ss'></img>
                    </div>
                </div>

            </div>
            <div className='health-foot-gap'></div>

        </div>
    )
}