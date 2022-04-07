
import axios from 'axios';
import React, { useState,useEffect} from 'react';

import baseUrl from '../../utils/baseUrl';
import Filters from '../Filters/Filters';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import LaunchesItem from './LaunchesItem';

const Launches = (props) => {
   


    const [launchData, setLaunchData] = useState([]);
     const [displayfilter, setdisplayfilterr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);





  
console.log(launchData);
console.log(displayfilter);
useEffect(() => {
        let url = `${baseUrl}`;
      
axios.get(url)
  .then(function (response) {
   
    setLaunchData(response.data);
    setLoading(false);
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .then(function () {
    
  });


      }, [ ]);
useEffect(() => {
  setdisplayfilterr([...launchData])

      }, [launchData ]);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = displayfilter.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



    return (

        <div>
           <Filters launchData={launchData} setdisplayfilterr={setdisplayfilterr} {...props}></Filters>
          <div class="container">
                      <div class="row">
                     {loading && <Loading></Loading>} 
                     {displayfilter.length === 0 && (
                        <div>Your data could not be found</div>
                      )}
                      { currentPosts.map((missionDetails) => (
                       <LaunchesItem details={missionDetails} key={missionDetails.last_date_update} />
                        
                      )) }

                      <Pagination
                          postsPerPage={postsPerPage}
                          totalPosts={displayfilter.length}
                          paginate={paginate}
                        />

                      </div>
            </div>
  
            
        </div>
    );
};

export default Launches;