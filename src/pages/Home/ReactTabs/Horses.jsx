import React from 'react';

const Horses = ({ horse }) => {
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
        <div className="card-actions justify-end">
          <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn btn-primary">
              Details
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-success btn-circle absolute  right-2 top-4"
                >
                  ✕
                </label>

                <p className="py-4 text-black text-justify">{horse?.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horses;