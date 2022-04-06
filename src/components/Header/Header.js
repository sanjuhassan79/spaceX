import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            
  <nav className="navbar fixed-top navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand navbarbrand" href="#"> <img src="https://i.ibb.co/2gx1sjq/Vector.png" className="img-fluid" alt="..."/> space</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <i className="fas fa-bars"></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-100 justify-content-end">
          <li className="nav-item active">
            <a className="nav-link text-white px-3 nav-linkpx-3" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white px-3 nav-linkpx-3" href="#">About</a></li>
            <li className="nav-item">
              <a className="nav-link text-white px-3 nav-linkpx-3" href="#">Contact</a></li>
              <li className="nav-item">
                <a className="nav-link text-white px-3 nav-linkpx-3" href="#">Services</a></li>
                <li className="nav-item">
                  <a  href="#"><span className="head-btn"> <button className="btn-hean" type="submit">Contact Us</button> </span>
                    </a>
                </li>
        </ul>
     
    </div>
    </div>
  </nav>





  
        </div>
    );
};

export default Header;