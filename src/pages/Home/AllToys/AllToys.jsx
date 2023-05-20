import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from './AllToy';

const AllToys = () => {

    const allToys = useLoaderData();
    
    return (
      <div className="my-10 mx-10">
        <div>
          <input
            type="text"
            value=""
            className="mb-2 py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          {/* Other JSX */}
        </div>
        <table className="table w-full">
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
            {allToys.map((toy) => (
              <AllToy key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllToys;