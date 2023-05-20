import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Title/UseTitle';

const AllToyDetails = () => {
    
    useTitle("all toys Details")
    const details = useLoaderData();


    return (
      <div className="mx-10 my-10">
        <h1 className="text-center text-2xl font-bold mb-10">
          <span className='text-red-600'>Details of</span> {details.subcategory}
        </h1>
        <p className=" border-blue-200 border p-10">{details.details}</p>
      </div>
    );
};

export default AllToyDetails;