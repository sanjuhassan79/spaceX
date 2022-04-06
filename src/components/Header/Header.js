import React from 'react';

const Header = () => {
    return (
        <div>
            
  <nav className="navbar fixed-top navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#"> <img src="https://i.ibb.co/2gx1sjq/Vector.png" className="img-fluid" alt="..."/> space</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <i className="fas fa-bars"></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-100 justify-content-end">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a></li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a></li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Other</a>
                </li>
        </ul>
     
    </div>
    </div>
  </nav>
        </div>
    );
};

export default Header;