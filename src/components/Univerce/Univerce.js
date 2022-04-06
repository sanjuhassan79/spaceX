import React from 'react';
import './Univerce.css'
const Univerce = () => {
    return (
        <div>
             <div className="container discover">

                 <div className='Discover-title'>
                     <h2>Discover Univerce</h2>
                 </div>


                <div className="row">

                <div className="col-md-4">
                    <div className="feature-item feature-item-1">
                        <div className="feature-icon">
                            <img className='imgitemf' src="https://i.ibb.co/WKtjk7P/t-2x.png" alt="Online/Offline Classrooms"/>
                        </div>
                        <div className="feature-details">
                            <h4>Mission Bongo</h4>
                            <p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="feature-item feature-item-2">
                        <div className="feature-icon">
                            <img className='imgitemf' src="https://i.ibb.co/KmhsjDh/j-2x.png" alt="Personal Mentor Support"/>
                        </div>
                        <div className="feature-details">
                            <h4>Mission BD </h4>
                            <p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                        </div>
                    </div>
                </div> 

            <div className="col-md-4">
                <div className="feature-item feature-item-3">
                    <div className="feature-icon">
                        <img className='imgitemf' src="https://i.ibb.co/9njmj9s/se-2x.png" alt="Lifetime Slack Chat Support"/>
                    </div>
                    <div className="feature-details">
                        <h4>Mission 11 </h4>
                        <p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                    </div>
                </div>
            </div>
        
                </div>
            </div>
        </div>
    );
};

export default Univerce;