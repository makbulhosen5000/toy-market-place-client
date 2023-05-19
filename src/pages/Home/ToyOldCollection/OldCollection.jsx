import React from "react";
import Marquee from "react-fast-marquee";


const OldCollection = () => {

  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-2xl mb-10">
        <span className="text-red-600 ">Old Toy</span> Gallery
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className=" w-100 bg-base-100  my-5">
          <figure>
            <img
              className="rounded-full"
              src="https://i.ibb.co/zNdLdR5/pexels-ahmet-ift-i-15471136.jpg"
              alt="Teddy"
              style={{ width: "300px", height: "300px" }}
            />
          </figure>
        </div>
        <div className=" w-100 bg-base-100  my-5">
          <figure>
            <img
              className="rounded-full"
              src="https://i.ibb.co/G5dhhvH/pexels-coppertist-wu-15515639.jpg"
              alt="Teddy"
              style={{ width: "300px", height: "300px" }}
            />
          </figure>
        </div>
        <div className=" w-100 bg-base-100  my-5">
          <figure>
            <img
              className="rounded-full"
              src="https://i.ibb.co/cXsz4pN/pexels-lisa-fotios-832999.jpg"
              alt="Teddy"
              style={{ width: "300px", height: "300px" }}
            />
          </figure>
        </div>
        <div className=" w-100 bg-base-100  my-5">
          <figure>
            <img
              className="rounded-full"
              src="https://i.ibb.co/CbFF15V/pexels-suki-lee-15343383.jpg"
              alt="Teddy"
              style={{ width: "300px", height: "300px" }}
            />
          </figure>
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl my-10">
          <span className="text-red-600 ">Special Toy</span> Offer
        </h1>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/GW4qbsY/pexels-akshar-dave-870866.jpg"
              alt="Album"
            />
          </figure>

          <div className="card-body">
            <Marquee>
              <h2 className="card-title text-red-600">
                New Offer! Don't miss out on this amazing opportunity
              </h2>
            </Marquee>

            <p className="text-gray-700 mb-4">
              Don't miss out on this amazing opportunity to grab your favorite
              toys at jaw-dropping prices. The sale starts on [5-25-2023] and
              will run for a limited time only. Visit our store or browse our
              online shop to discover the incredible deals that await you.
            </p>
            <p className="text-gray-700">
              Remember, happiness comes in the form of toys, and with our
              unbeatable sale, you can bring unlimited smiles to the faces of
              your loved ones without breaking the bank. Hurry, stock is
              limited, and these fantastic deals won't last forever!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldCollection;
