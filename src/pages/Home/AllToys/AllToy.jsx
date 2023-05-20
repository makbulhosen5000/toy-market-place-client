import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Title/UseTitle';

const AllToy = ({ toy }) => {
   useTitle("All Toys")

  return (
        <tr>
          <td>{toy?.user}</td>
          <td>{toy?.name}</td>
          <td>${toy?.price}</td>
          <td>{toy?.quantity}</td>
          <Link to={`/allToyDetails/${toy._id}`}>
            <td>
              <button className="btn btn-success">Details</button>
            </td>
          </Link>
        </tr>
  );
};

export default AllToy;