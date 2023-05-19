import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Title/UseTitle';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    useTitle("login")

    return (
      <div className="flex flex-col md:flex-row items-center justify-center lg:mx-10 my-20">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/Bq7WzzF/login1.jpg"
            alt="Login"
            className="w-full h-auto mb-4"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
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
                <span className="bg-yellow-600 p-3 rounded-lg text-white">
                  <FaGoogle />
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;