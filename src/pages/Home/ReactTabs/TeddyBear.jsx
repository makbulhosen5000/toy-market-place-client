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

                <p className="py-4 text-black text-justify">
                  {teddyBear?.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeddyBear;