import React, { useState } from 'react';
import './Filters.css'

const Filters = ({launchData,setLaunchData}) => {

 

    const [inq, setInq] = useState("");
 


    const onSubmit = evt => {
        evt.preventDefault();
       
        const post = launchData.filter(item =>
          item.rocket.rocket_name.toUpperCase().indexOf(inq.toUpperCase()) > -1
        );
        setLaunchData(post)
       
      };
    
     
      const onChange = e => {
   
        setInq(e.target.value)
      };

      const handleYearChange = (year) => {
        
console.log(year);
        const post = launchData.filter(item =>
          item.launch_year.indexOf(year) > -1
        );
        setLaunchData(post)
      }
      const handleupcomingChange = (e) => {
       
console.log(e.target.value);
      
         const post = launchData.filter(Boolean)
       
        setLaunchData(post)
      }





    return (
        <div className="">

<div className="container filterNavebar">
  
  <div className="row">
    <div className="col-sm-2 py-2 borderitem">
    
    Is upcoming? <select onChange={(e) =>handleupcomingChange(e)}
          className="custom-select"
          aria-label="Filter Countries By Region">
            <option value='true'>Yes</option>
            <option value='false'>No</option>
            
          </select> 
         
    </div>
    <div className="col-sm py-2">
    Launch year? <select onChange={(e) =>handleYearChange(e.target.value)}
          className="custom-select"
          aria-label="Filter Countries By Region">
            <option value="1990">1990</option>
            <option value="1995">1991 - 1995</option>
            <option value="1996">1996 - 2000</option>
            <option value="2005"> 2001 - 2005</option>
            <option value="2010">2006 - 2010</option>
            <option value="2015">2011 - 2015</option>
            <option value="2020"> 2016 - 2020</option>
          </select>
          </div>
    <div className="col-sm">
      
    <form onSubmit={onSubmit} className="bg-gray-200">
                <input
                type="text"
                name="text"
                placeholder="search users..."
                value={inq}
                onChange={onChange}
                className="form-control form_control_ite"
                />
                <button type="submit" className="btn-sub_fit">
                Search
                </button>
        </form>
    </div>
  </div>
</div>



          












          










         



                   
        </div>
    );
};

export default Filters;