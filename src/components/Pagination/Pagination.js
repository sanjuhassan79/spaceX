import { Button } from 'bootstrap';
import React from 'react';
import './Pagination.css'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
 

    <>
       <nav className='data-pagination'> 
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='current'>
            <button className='pagebutton' onClick={() => paginate(number)}  >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
   



    </>
  );
};

export default Pagination;