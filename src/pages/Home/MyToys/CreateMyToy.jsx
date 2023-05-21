import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../Title/UseTitle';
import Swal from "sweetalert2";

const CreateMyToy = () => {
    useTitle("Create My Toys")
    const {user} = useContext(AuthContext);


    const userMyToyHandler = event =>{
        event.preventDefault();
         const form = event.target;
         const photo = form.photo.value;
         const name = form.name.value;
         const email = user?.email;
         const subcategory = form.subcategory.value;
         const price = form.price.value;
         const quantity = form.quantity.value;
         const details = form.details.value;
         const userInfo ={photo, name,email,subcategory,price,quantity,details}
          fetch("https://toy-market-place-server-jet.vercel.app/toys", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Data Inserted Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
              form.reset();
            });
       }
    return (
      <div className="mx-10 my-10 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-center mb-10 text-2xl font bold">
              <span className="text-red-600">User</span> Registration Form
            </h1>
          </div>
          <div>
            <Link to="/my-toys">
              <button className="btn btn-success">View User List</button>
            </Link>
          </div>
        </div>
        <form onSubmit={userMyToyHandler}>
          <div className="flex justify-center gap-3">
            <div className="w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
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
                  name="name"
                  
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
                  name="email"
                  defaultValue={user?.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subcategory"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Sub-Category
                </label>
                <input
                  type="text"
                  id="subcategory"
                  name="subcategory"
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
                  name="price"
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
                  name="details"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className=" btn  btn-block">
            Submit
          </button>
        </form>
      </div>
    );
};

export default CreateMyToy;