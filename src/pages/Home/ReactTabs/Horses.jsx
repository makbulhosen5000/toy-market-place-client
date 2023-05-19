import React from 'react';
import { Link } from 'react-router-dom';

const Horses = ({ horse }) => {

    const hoursViewDetails = () => {
      toast("Login First");
    };
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={horse?.img}
          style={{ width: "400px", height: "300px" }}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {horse?.name}</h2>
        <h2 className="card-title">Price: ${horse?.price}</h2>
        <h2 className="card-title">Rating: {horse?.rating}</h2>
        <Link to="/login">
          <div className="card-actions justify-end">
            <button onClick={hoursViewDetails} className="btn btn-primary">
              View Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Horses;