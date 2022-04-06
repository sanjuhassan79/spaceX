import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-main">

<div className="container ">
 
 <div className="row rowItem">
      <div className="col-4">

          <div>
              <div className="b-item">
              <button className="btn text-color-item"><img src="https://i.ibb.co/9GZ7GX2/r8-2.png" className="img-fluid" alt="..."/> Welcome to Stella</button>

              </div>
         

              <h1 className='title'>SPACE FOR <br></br> EVERYONE</h1>
              <p className='para'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
              <button className="banner-but-1">Secondary</button>
              
          </div>
          



      </div>
     <div className="col-8 wrapper">
      <div className="item">
      <img src="https://i.ibb.co/m42JXPy/Asset-1-8x-8-1.png" className="run img-fluid" alt="..."/>
         </div> 


     </div>
    
 </div>
</div>
        </div>
       
    );
};

export default Banner;