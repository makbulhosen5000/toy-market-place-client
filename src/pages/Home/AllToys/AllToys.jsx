import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from './AllToy';


const AllToys = () => {
    const allToys = useLoaderData();


    return (
      <div className="my-10 mx-10">

        <table className="table w-full text-center">
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