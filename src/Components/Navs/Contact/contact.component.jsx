import { Link } from 'react-router-dom';
import React from "react";
import '../Contact/contact.component.css';




export function Contact() {

  return (
    <div>
      <div className='store-H-bg'>
        <Link to="/"><label className='store-H-text'>Home/</label></Link>
        <label>Contact</label>
      </div>
      <br></br>

      <div className='store-text'>Contact</div>
      <br></br>

      <div className='googleMap'>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=502%20New%20St,%20Brighton%20VIC%203186,%20Australia+(502%20New%20St)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
      </div>


      <div>
        <div className='d-flex'>
          <div className='cont-col'>
            <div className='CB-text'>Contact Info</div>
            <div className='CS-text'>Location</div>
            <div className='CS-text1'>STORE</div>
            <div className='CS-text1'>68 Atlantic Ave St, Brooklyn, NY 90002, USA</div>
            <div className='CS-text1'>(+005) 5896 72 78 79</div>
            <div className='CS-text1'>support@farmart.com</div>
            <div className='CS-text1'>WAREHOUSE</div>
            <div className='CS-text1'>172 Richmond Hill Ave St, Stamford, NY 90002, USA</div>
            <div className='CS-text1'>(+005) 5896 03 04 05</div>




          </div>
          <div class="vertical-line"></div>

          <div className='con-col2'>
            <div >
              <label>
                <input type='text' placeholder='Your Name' className='form-control cinput'></input>
              </label>
              <label className='cf-gap'></label>
              <label>
                <input type='mail' placeholder='Your Email' className='form-control cinput'></input>
              </label>
            </div>
            <br></br>
            <div>
              <label>
                <input type='text' placeholder='Your Adress' className='form-control cinput'></input>
              </label>
              <label className='cf-gap'></label>
              <label>
                <input type='phone' placeholder='Your Phone' className='form-control cinput'></input>
              </label>
            </div>
            <br></br>
            <div>

              <input type='text' placeholder='Subject' className='form-control cinput1'></input>

            </div>
            <br></br>
            <div>
              <textarea placeholder='Write Your Message here' className='form-control cinput2'></textarea>
            </div>

            <div>
              <button className='CButton'>Send Message</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}