import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../Title/UseTitle";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    useTitle("Register");
    const [error,setError] = useState("");
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();



 const registerFormHandler = (e) => {
   e.preventDefault();
   const form = e.target;
   const name = form.name.value;
   const photo = form.photo.value;
   const email = form.email.value;
   const password = form.password.value;

   setError("Something Wrong");
   createUser(email, password)
     .then((result) => {
       const loggedUser = result.user;
       console.log(loggedUser);
       form.reset();
       navigate("/");
       toast("Register Successfully");
     })
     .catch((error) => {
       console.log(error);
       setError(error.message);
     });
 };





  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:mx-10 my-20">
      <div className="md:w-1/2">
        <img
          src="https://i.ibb.co/y4dKwkp/register.jpg"
          alt="Register"
          className="w-full h-auto mb-4"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <form
          onSubmit={registerFormHandler}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photo"
            >
              Photo URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="photo"
              id="photo"
              type="text"
              placeholder="Enter your photo url"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <p className="text-red-600 font-bold mb-2">{error}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
