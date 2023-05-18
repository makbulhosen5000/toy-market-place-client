import React from 'react';

const Dinosaurs = ({ dinosaur }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={dinosaur?.img}
          style={{ width: "400px", height: "300px" }}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {dinosaur?.name}</h2>
        <h2 className="card-title">Price: ${dinosaur?.price}</h2>
        <h2 className="card-title">Rating: {dinosaur?.rating}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Dinosaurs;