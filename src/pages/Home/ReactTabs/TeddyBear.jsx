import React from 'react';

const TeddyBear = ({ teddyBear }) => {
  return (

      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={teddyBear?.img}
            style={{ width: "400px", height: "300px" }}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {teddyBear?.name}</h2>
          <h2 className="card-title">Price: ${teddyBear?.price}</h2>
          <h2 className="card-title">Rating: {teddyBear?.rating}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>

  );
};

export default TeddyBear;