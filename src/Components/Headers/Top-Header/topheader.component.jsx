import '../Top-Header/topheader.component.css';
import flag from '../../../assets/download1.png';
import flag1 from '../../../assets/Flag_of_Canada_(Pantone).svg.png';
import flag2 from '../../../assets/istockphoto-806626836-612x612.jpg';
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { getLocalStorageItem, removeLocalStorageItem } from '../../Service/Storages/local.storage';





export function TopHeader() {

    //for user login
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
    const isUserRef = useRef(true);

    const navigate = useNavigate();



    useEffect(() => {

        isUserRef.current = true;
        const data = getLocalStorageItem("userData");
        if (data && isUserRef.current) {
            setIsUserLoggedIn(JSON.parse(data));

        }
        return () => {
            isUserRef.current = false;
        };
    }, [isUserLoggedIn]);

    //for user logout
    const userLogOut = () => {
        removeLocalStorageItem("userData");
        setIsUserLoggedIn(null);
        if (isUserRef.current) {
            navigate("/")
        }
    }

    return (
        <div>
            <div className='far-header'>
                <div className='far-header-text'>
                    <label className='far-text'>About Us</label>|
                    <label className='far-text'>Wishlist</label>|
                    <label className='far-text'>Order Tracking</label>

                    <label className='far-gap'></label>
                    <label>
                        <label className='far-text items'><img src={flag} className='flag'></img>English <IoIosArrowDown />

                            <ul className="sub-menu" style={{ height: "70px" }}>
                                <li className="li"><img src={flag1} className='flag1'></img>&nbsp;&nbsp;Canada</li>
                                <li className="li"><img src={flag2} className='flag1'></img>&nbsp;&nbsp;Japan </li>

                            </ul></label>|
                        <label className='far-text items'>USD <IoIosArrowDown />
                            <ul className="sub-menu">
                                <li className="li">&nbsp;&nbsp;<label></label>EUR</li>
                                <li className="li">&nbsp;&nbsp;VND</li>
                                <li className="li">&nbsp;&nbsp;NGN</li>

                            </ul></label>|
                        <label>


                            {
                                isUserLoggedIn ? (
                                    <label>
                                        <label>
                                            <label className='far-text' style={{ fontWeight: "500" }}>{isUserLoggedIn[0].Name}</label>


                                            (<label className='far-text' onClick={userLogOut} style={{ color: "orange" }}>Logout</label>)

                                        </label>

                                    </label>
                                ) : (
                                    <label>

                                        <label>
                                            <Link to='/Login' style={{ textDecoration: 'none', color: "black" }}>
                                                <label className='far-text'>Login</label>
                                            </Link>
                                            <label>|</label>
                                            <Link to='/Signin' style={{ textDecoration: 'none', color: "black" }}>
                                                <label className='far-text'>Register</label>
                                            </Link>
                                        </label>

                                    </label>
                                )
                            }



                        </label>



                    </label>


                </div>
                <hr></hr>
            </div>
        </div>
    )
}