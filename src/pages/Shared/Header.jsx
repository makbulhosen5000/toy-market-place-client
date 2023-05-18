import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-xl">
            <img src={logo} className='w-[18%]' alt="" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <NavLinks />
        </div>
        <div className="sm:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden absolute top-0 left-0 right-0 bg-gray-800 z-10">
            <NavLinks toggleMenu={toggleMenu} />
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ toggleMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center">
      <NavLink
        exact
        to="/"
        activeClassName="text-white"
        className="text-gray-300 hover:text-white mr-4"
        onClick={toggleMenu}
      >
        Home
      </NavLink>
      <div className="relative">
        <div
          className={`${
            isDropdownOpen ? "text-white" : "text-gray-300"
          } flex items-center group`}
          onClick={toggleDropdown}
        >
          <span className="mr-1">Categories</span>
          <svg
            className={`${
              isDropdownOpen ? "text-white" : "text-gray-400"
            } h-4 w-4 ml-1 transition-transform duration-200 transform group-hover:text-white`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d="M6 8l4-4 4 4H6z" />
          </svg>
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 py-2 bg-gray-800 w-40 rounded-lg shadow-lg">
            <Link
              to="/team"
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              to="/history"
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={toggleMenu}
            >
              History
            </Link>
            <Link
              to="/mission"
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Mission
            </Link>
          </div>
        )}
      </div>
      <Link
        to="/login"
        activeClassName="text-white"
        className="text-gray-300 hover:text-white"
        onClick={toggleMenu}
      >
        Login
      </Link>
    </div>
  );
};

export default Header;

            
