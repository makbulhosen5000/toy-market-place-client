import React from 'react';
import { Link } from 'react-router-dom';

const CreateMyToy = () => {
    return (
      <div className="mx-10 my-10 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-center mb-10 text-2xl font bold">
              <span className="text-red-600">User</span>Registration Form
            </h1>
          </div>
          <div>
            <Link to="/my-toys">
              <button className="btn btn-success">View User List</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <div className="w-1/2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subcategory"
                className="block text-gray-700 font-bold mb-2"
              >
                Subcategory
              </label>
              <input
                type="text"
                id="subcategory"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="w-1/2">
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-gray-700 font-bold mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="details"
                className="block text-gray-700 font-bold mb-2"
              >
                Details
              </label>
              <textarea
                id="details"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className=" btn  btn-block">Submit</button>
      </div>
    );
};

export default CreateMyToy;