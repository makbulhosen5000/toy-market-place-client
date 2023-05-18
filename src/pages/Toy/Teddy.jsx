import React from 'react';

const Teddy = ({ teddy }) => {
    console.log(teddy.name);
  return (
    <div className=" w-100 bg-base-100 shadow-xl my-5">
      <figure>
        <img
          src={teddy?.img}
          alt="Teddy"
          style={{ width: "400px", height: "400px" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Name: {teddy?.name}
          <div className="badge badge-secondary">NEW Collection</div>
        </h2>
      </div>
    </div>
  );
};

export default Teddy;