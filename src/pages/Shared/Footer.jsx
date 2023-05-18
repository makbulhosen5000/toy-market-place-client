import React from "react";
import { FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mx-10">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <Link to="/" className="text-white font-bold text-xl">
              <img src={logo} alt="" className="w-[25%]" />
            </Link>
            <p className="mt-4 text-white ">Coding Duck Toy World</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Information
            </h2>
            <p className=" text-white mb-2">Phone: +0178228371</p>
            <p className=" text-white mb-2">Email: mhakash5000@gmail.com</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex">
              <Link
                to="https://www.google.com/"
                className="text-white hover:text-black mr-4"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaGoogle />
                </svg>
              </Link>
              <Link
                to="https://www.youtube.com/"
                className="text-white hover:text-black mr-4"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaYoutube />
                </svg>
              </Link>
              <Link to="https://www.facebook.com/" className="hover:text-black">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Social media icon */}
                  <FaFacebook />
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-white text-lg font-semibold mb-4">Address</h2>
            <p className=" text-white">
              Alakpur, Dottokhola,Bijoynagar
              <br />
              Brahmanbaria, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-center  text-white text-sm">
          &copy; {new Date().getFullYear()} Coding Duck Toy World. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
