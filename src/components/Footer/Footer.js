import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
        <div className="footer-top">
        <div className="content">
                    <h2>SUBSCRIBE NOW</h2>
                    <div className="input-group">
                        <input type="email" className="form-control form_control" placeholder="Enter email to subscribe"/> 
                       <span className="input-group-btn"> <button className="btn-sub" type="submit">Subscribe Now</button> </span>
                    
                    </div>
        </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
  
              <div className="col-md-3 col-3">
              <a className="navbar-brand" href="#"> <img src="https://i.ibb.co/2gx1sjq/Vector.png" className="img-fluid" alt="..."/> space</a>
              </div>
  
              <div className="col-md-6 col-6">
               <p className='copy'>Space 2020, All rights reserved.</p>
              </div>
  
              <div className="col-md-3 col-3">
                <div id="footer-socials">
                  <div className="socials inline-inside socials-colored">
  
                    <a href="#" target="_blank" title="Facebook" className="socials-item">
                      <i className="fab fa-facebook-f facebook"></i>
                    </a>
                    <a href="#" target="_blank" title="Twitter" className="socials-item">
                      <i className="fab fa-twitter twitter"></i>
  
                    </a>
                   
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;