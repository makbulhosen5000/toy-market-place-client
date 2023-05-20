import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useTitle from "../../Title/UseTitle";
import Swal from "sweetalert2";

const UpdateMyToys = () => {
   const navigate = useNavigate();
   const updateMyToys = useLoaderData();
   console.log("updateMyToys", updateMyToys);
   const {_id,photo,name,subcategory,price,quantity,details} = updateMyToys;
   
  useTitle("Update My Toys");
  const { user } = useContext(AuthContext);

  const updateToyFromHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = user?.email;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateUserInfo = {
      photo,
      name,
      email,
      subcategory,
      price,
      quantity,
      details,
    };
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Data Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
          navigate("/my-toys");
        }
      });
  };
  return (
    <div className="mx-10 my-10 ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-center mb-10 text-2xl font bold">
            <span className="text-red-600">User</span> Registration Update Form
          </h1>
        </div>
        <div>
          <Link to="/my-toys">
            <button className="btn btn-success">View User List</button>
          </Link>
        </div>
      </div>
      <form onSubmit={updateToyFromHandler}>
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
                defaultValue={photo}
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
                defaultValue={name}
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
                defaultValue={subcategory}
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
                defaultValue={price}
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
                defaultValue={quantity}
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
                defaultValue={details}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className=" btn  btn-block">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateMyToys;
