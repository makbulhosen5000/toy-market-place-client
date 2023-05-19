import React from "react";

const OldToy = ({ old }) => {

  return (
    <div className=" w-100 bg-base-100 shadow-xl my-5">
      <figure>
        <img
          src={old?.img}
          alt="Teddy"
          style={{ width: "400px", height: "300px" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Name: {old?.name}
          <div className="badge badge-secondary">Old Collection</div>
        </h2>
      </div>
    </div>
  );
};

export default OldToy;
