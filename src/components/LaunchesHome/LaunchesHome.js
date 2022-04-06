import React from 'react';
// import Filters from '../Filters/Filters';
import Launches from '../Launches/Launches';
import './LaunchesHome.css'
const LaunchesHome = (props) => {
    return (
        <div className='LaunchesHome'>
           
            <Launches {...props}></Launches>
        </div>
    );
};

export default LaunchesHome;