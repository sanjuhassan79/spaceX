
import axios from 'axios';
import React, { useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import baseUrl from '../../utils/baseUrl';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';
import LaunchesItem from './LaunchesItem';

const Launches = (props) => {
    const filters = useSelector(state => state.filters);
console.log(props);

    const [launchData, setLaunchData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);





    // const [loading, setLoading] = useState(true);
console.log(launchData);
useEffect(() => {
        let url = `${baseUrl}`;
        // console.log(url+`&launch_year=1922`);
        // ?limit=100
        // const yearInRoute = props.match.params.year;
    
        // if(filters.yearInRoute) url += `&launch_year=${yearInRoute}`;
        // if(filters.launchSuccess) url += `&launch_success=${true}`;
        // if(filters.landingSuccess) url += `&land_success=${true}`;
    
        // axios
        //   .get(url)
        //   .then(({ data }) => {
        //     setLaunchData(data);
        //     // setLoading(false);
        //   });
//         axios.get(url).then(resp => {

//     console.log(resp.data);
// });
axios.get(url)
  .then(function (response) {
    // handle success
    setLaunchData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


      }, [ ]);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = launchData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



    return (

        <div>
           <Filters launchData={launchData} setLaunchData={setLaunchData} {...props}></Filters>
          <div class="container">
                      <div class="row">
                      { currentPosts.map((missionDetails) => (
                       <LaunchesItem details={missionDetails} key={missionDetails.last_date_update} />
                        
                      )) }

                      <Pagination
                          postsPerPage={postsPerPage}
                          totalPosts={launchData.length}
                          paginate={paginate}
                        />

                      </div>
            </div>
  
            
        </div>
    );
};

export default Launches;