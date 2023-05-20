import React from 'react';

const Toy = ({ teddy }) => {
  return (
    <div className=" w-100 bg-base-100 shadow-xl my-5">
      <figure>
        <img
          src={teddy?.img}
          alt="Teddy"
          style={{ width: "400px", height: "300px" }}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
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

export default Toy;