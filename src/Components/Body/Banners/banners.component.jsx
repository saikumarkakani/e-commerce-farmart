import "../Banners/banners.component.css";
import banner1 from "../../../assets/banner1.jpg";
import banner11 from "../../../assets/banner11.jpg";
import banner2 from "../../../assets/banner 2.jpeg";
import { Carousel } from "react-bootstrap";




export function Banners() {
    return (
        <div className="banner-backg">
        
            <div class="container">
                <div class="row banner-style">
                    <div class="col-8">
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                <img src={banner1} className="banner1"></img>
                                    <Carousel.Caption>
                                   
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src={banner11} className="banner1"></img>
                                    <Carousel.Caption>
                                     
                                    </Carousel.Caption>
                                </Carousel.Item>
                              
                            </Carousel>
                        </div>
                    </div>
                    <div class="col-4">
                        <div >
                            <img src={banner2} className="banner2"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}