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
            <a onClick={() => paginate(number)} href='!#' >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
   



    </>
  );
};

export default Pagination;