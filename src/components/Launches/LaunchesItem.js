import React from 'react';
import './LaunchesItem.css'
const LaunchesItem = (props) => {

// console.log(props.details.launch_year);
  const {
    mission_name,
    rocket,
    links,
    launch_year,
    upcoming
  } = props.details;

  // console.log(typeof launch_year);
    return (


    <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-center"> 

    <div className="carditem">
        <img className="card-img-top" src={links.mission_patch_small} alt="Card image cap"/>
          <div className="card-body ">
            <h4 className="card-title h4 mission_name">{mission_name}</h4>
            <p className="card-text Rocket">Rocket name: {rocket.rocket_name}</p>
            <p className="card-date Rocket">Launch year: {launch_year}</p>
            <p className="card-date Rocket">Upcoming: { String(upcoming) }</p>
          </div>


    </div>
             </div>
   
  



      
    );
};

export default LaunchesItem;