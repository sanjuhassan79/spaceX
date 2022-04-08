import React, { useState } from 'react';
import './Filters.css'

const Filters = ({launchData,setdisplayfilterr}) => {

    const [inq, setInq] = useState("");
 


    const onSubmit = evt => {
        evt.preventDefault();
       
        const post = launchData.filter(item =>
          item.rocket.rocket_name.toUpperCase().indexOf(inq.toUpperCase()) !== -1
        );
      
        setdisplayfilterr(post)
       
      };
    
     
      const onChange = e => {
        setInq(e.target.value)
      };

      const handleYearChange = (year) => {
        // console.log(typeof year)
        // console.log(year)
        let yearfist=year.split('-')
        
        // console.log(yearfist[0])
        // console.log(typeof yearfist[1])
        // var range = {
        //   min: yearfist[0],
        //   max: yearfist[1]
        // };
        // var range = {
        //   min:yearfist[0],
        //   max:yearfist[1]
        // };
        let x=yearfist[0]
        let y=yearfist[1]
        console.log(typeof x);
        // console.log(range.min);
         var res = launchData.filter((o)=>{
           if(o.launch_year >=x  && o.launch_year < y){
            return true;
           }else if(o.launch_year <x  || o.launch_year > x){
            return false;

           }
        
         });
console.log(res);
      //   var ans = launchData.filter((v,i)=>{
      //     if(v.launch_year.indexOf(yearfist[0]) >=0 || v.launch_year.indexOf(yearfist[1]) >=0) {
      //         return true;
      //     } 
      // });

        // console.log(typeof range.min);

        // var res = launchData.filter((o)=>{
        //   return o.launch_year === yearfist[0] && o.launch_year === yearfist[1] ;
        // });
        // console.log(res);
        // let filteredNumbers = launchData.filter( (item)=>{
        //   if (item.launch_year.indexOf(yearfist[0]) !== -1 &&item.launch_year.indexOf(yearfist[0]) !== -1 {
        //     return true;
        //   }
        // });
    //  const post = launchData.filter(item =>
    //      item.launch_year.indexOf(yearfist[0].toString()) !== -1 
    //     );
        
       setdisplayfilterr(res)





      }


      const handleupcomingChange = (e) => {
                let biten=[e.target.value]
                let myBool = JSON.parse(biten);
                let bconvatboolean=[myBool]
              
                var result = launchData.filter(val=>bconvatboolean.includes(val.upcoming));

                setdisplayfilterr(result)
      }


    return (
        

<div class="container filterNavebar">
 
      <div class="row">
        
        
          <div class="col col-lg-2 py-2">
            <div className='select_item'>
            Is upcoming? <select onChange={(e) =>handleupcomingChange(e)}
                className="custom-select"
                aria-label="Filter Countries By Region">
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                  
                </select> 
            </div>
        
          </div>
          <div class="col-md-auto py-2">
            <div className='select_item'>
            Launch year? <select onChange={(e) =>handleYearChange(e.target.value)}
                className="custom-select"
                aria-label="Filter Countries By Region">
                  <option value="1990">1990</option>
                  <option value="1991-1995">1991 - 1995</option>
                  <option value="1996-2000">1996 - 2000</option>
                  <option value="2001-2005"> 2001 - 2005</option>
                  <option value="2006-2010">2006 - 2010</option>
                  <option value="2011-2015">2011 - 2015</option>
                  <option value="2016-2020"> 2016 - 2020</option>
                  <option value="2020">2020</option>
                </select>
            </div>
          
          </div>

          <div class="col initem">
          <form onSubmit={onSubmit} className="bg-gray-200">
                      <input
                      type="text"
                      name="text"
                      placeholder="search users..."
                      value={inq}
                      onChange={onChange}
                      className="form-control form_control_ite"
                      />
                      <span className='input-group-btn_ite'>
                      <button type="submit" className="btn-sub_fit">
                      Search
                      </button>

                      </span>
                      
              </form>
          </div>
      </div>
</div>
















    );
};

export default Filters;