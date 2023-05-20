import React from 'react';
import { toast } from 'react-hot-toast';
import { Link} from 'react-router-dom';

const TeddyBear = ({ teddyBear }) => {

   
    const teddyViewDetails = () => {
     toast("Login First");
   };
  
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
        <Link to="/login">
          <div className="card-actions justify-end">
            <button onClick={teddyViewDetails} className="btn btn-primary">
              View Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TeddyBear;