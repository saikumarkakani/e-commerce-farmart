import React, { useState } from 'react';
import '../Sign-in/signin.component.css';
import g from '../../../assets/g.png';
import { GoPersonAdd } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

export function Signin() {
    const [isVendor, setIsVendor] = useState(false);

    function showVendorFields() {
        setIsVendor(true);
    }

    function showCustomerFields() {
        setIsVendor(false);
    }


    return (
        <div>
              <div className='store-H-bg'>
              <Link to="/"><label className='store-H-text'>Home/</label></Link> 
                <label>Signin</label>
            </div>
            <br></br>
            <div className='signin-body'>
                <form className='signin-form' method='post' action='http://localhost:4002/userDetails'>
                    <div>
                        <label className='signin-lock-box'><GoPersonAdd className='signin-lock' /></label>
                        <label className="signin-text">Register an account</label>
                        <div className='signin-text-small'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</div>
                    </div>
                    <br /><br />
                    <div >
                
                        <div className='signin-email-text'>Full name</div>
                        <label><GoPerson className='signin-mail-style' /></label><label> <input type='text' placeholder=' Your Full name' className='form-control signin-mail-input' name='Name'></input></label>
                    </div>
                    <br />
                    <div>
                        <div className='signin-email-text'>Email</div>
                        <label><CiMail className='signin-mail-style' /></label><label> <input type='mail' placeholder='Email Adress' className='form-control signin-mail-input'name='Email'></input></label>
                    </div>
                    <br />
                    <div>
                        <div className='signin-email-text'>Phone (optional)</div>
                        <label><LuPhone className='signin-mail-style' /></label><label> <input type='number' placeholder='Your Number' className='form-control signin-mail-input' name='PhoneNumber'></input></label>
                    </div>
                    <br />
                    <div>
                        <div className='signin-email-text'>Password</div>
                        <label> <CiLock className='signin-mail-style' /></label><label><input type='password' placeholder='Password ' className='form-control  signin-mail-input' name='Password'></input></label>
                    </div>
                    <br />
                    <div>
                        <div className='signin-email-text'> Confirm Password</div>
                        <label> <CiLock className='signin-mail-style' /></label><label><input type='password' placeholder='Password Confirmation ' className='form-control  signin-mail-input'></input></label>
                    </div>
                    <br />
                    <div>
                        <div className='signin-email-text'>Register as</div>
                        <input type="radio" value="customer"  className='signin-email-text' name="userType" onChange={() => showCustomerFields()} />&nbsp;I am a customer
                        <input type="radio" value="vendor" className='signin-email-text' name="userType" onChange={() => showVendorFields()} />&nbsp;I am a vendor
                        {isVendor && (
                            <div id="vendorFields">
                                <div>
                                    <div className='signin-email-text'>Shop Name</div>
                                   
                                    <label> <input type='text' placeholder='Ex. My Shop' className='form-control shop-input'></input></label>
                                </div>
                                <br />
                                <div>
                                    <div className='signin-email-text'>Shop URL</div>
                                    <label><input type='text' placeholder='Your Company Address' className='form-control shop-input'></input></label>
                                </div>
                                <div className='url'>https://farmart.botble.com/stores</div>
                                <br />
                                <div>
                                    <div className='signin-email-text'>Phone Number</div>
                                    <label> <input type='text' placeholder='Ex: 09854658451 ' className='form-control shop-input'></input></label>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className='signin-remember'><input type='checkbox'></input>&nbsp;Remember me</label>
                        <label className='signin-forgot'>Forgot Password ?</label>
                    </div>
                    <br /><br />
                    <div>
                        <button className='signin-button'>Register <GoArrowRight /></button>
                    </div>
                    <div>
                        <label className='signin-acc'>Already have an account?</label><Link to='/Login' style={{ textDecoration: 'none', color: " #777272" }}><label className='signin-register'>Login </label></Link>
                    </div>
                    <label className='signin-center-box-login'>Or login with </label>
                    <br /><br />
                    <div>
                        <div className='signin-G-button'><label> <img src={g} className='signin-g'></img> </label><label className='signin-g-text'>Continue with &nbsp;<b>google </b> </label></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
