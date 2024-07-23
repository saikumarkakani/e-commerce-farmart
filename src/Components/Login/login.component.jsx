import '../Login/login.component.css';
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import g from '../../assets/g.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { getuserDetails } from '../Service/users.service';
import { setLocalStorageItem } from '../Service/Storages/local.storage';
import store from '../Service/reduxStore.service';
import { UserContextVariable } from '../Service/userContext';





export function Login() {

    const navigate = useNavigate();

    //ref variable
    const EmailRef = useRef();
    const PasswordRef = useRef();

  
    
    
        function getRegisterData() {
    
            const Email = EmailRef.current.value;
            const Password = PasswordRef.current.value;
    
            getuserDetails().then((res) => {
                
    
                let filterData = res.data.filter((item) =>
    
                    item.Email == Email && item.Password == Password
    
                );
                if (filterData.length > 0) {
                    setLocalStorageItem("userData", filterData);
                    let action = {type:"login", data:filterData};
                    store.dispatch(action);
                    alert("Login Succesfully...");
                    navigate("/");
                    window.location.reload();
                    
                }
                else {
                    alert("User Not Found...");
                }
    
    
            })
                .catch((ex) => {
                    alert(ex.message)
                })
    
        }
    


    return (
        <div>
              <div className='store-H-bg'>
                <Link to ='/'><label className='store-H-text'>Home/</label></Link>
                <label>login</label>
            </div>
            <br></br>
            <div className='login-body'>


                <div className='login-form'>
                    <div>
                        <label className='lock-box' ><CiLock className='login-lock' /></label>
                        <label className="login-text">Login to your account</label>
                        <div className='login-text-small'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <div className='email-text'>Email</div>
                        <label><CiMail className='mail-style' /></label><label> <input type='mail' placeholder='Email Adress' className='form-control mail-input' ref={EmailRef} ></input></label>

                    </div>
                    <br></br>
                    <div>
                        <div className='email-text'>Password</div>
                        <label> <CiLock className='mail-style' /></label><label><input type='password' placeholder='Password ' className='form-control  mail-input' ref={PasswordRef} ></input></label>

                    </div>
                    <br></br>
                    <div>
                        <label className='remember'><input type='checkbox'></input>&nbsp;Remember me</label>
                        <label className='forgot'>Forgot Password ?</label>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <button className='login-button' onClick={()=>{getRegisterData()}}>Login <GoArrowRight /></button>
                    </div>
                    <div>
                        <label className='acc'>Don't have an account? </label><Link to='/Signin' style={{ textDecoration: 'none', color:" #777272" }}> <label  className='register'>Register now</label></Link>
                    </div>
                
                    <label className='center-box-login'>Or login with </label>
                    <br></br>
                    <br></br>
                    <div>
                        <div className='G-button'><label> <img src={g} className='g'></img> </label><label className='g-text'>Continue with &nbsp;<b>google </b> </label></div>
                    </div>

                    
                </div>

            </div>
        </div>

    )
}