import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Title/UseTitle';

const AllToy = ({ toy }) => {
   useTitle("All Toys")

   const [query, setQuery] = useState("");

  return (
    <div>
      <div className="overflow-x-auto my-10 mx-10">
        <div>
          <input
            type="text"
            value=""
           
            className="mb-2 py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          {/* Other JSX */}
        </div>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>SubCategory</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;