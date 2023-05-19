import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../Title/UseTitle";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  //login with google
  const loginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  const loginFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   
    setError("Wrong Email And Password");
    
  
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate("/");
        toast("Login Successfully");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:mx-10 my-20">
      <div className="md:w-1/2">
        <img
          src="https://i.ibb.co/FgfZxxC/login1.jpg"
          alt="Register"
          className="w-full h-auto mb-4"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <form
          onSubmit={loginFormHandler}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6">Login</h2>

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
              Sign In
            </button>
            <Link
              to="/register"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Register Here
            </Link>
          </div>
          <div className="divider">OR</div>
          <div className="text-center">
            <Link className="grid place-items-center">
              <button
                onClick={loginWithGoogle}
                className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <FaGoogle />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
