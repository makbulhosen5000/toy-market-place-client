import React from 'react';
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="">
        <div className="navbar bg-blue-600 text-white ">
          <div className="flex-1">
            <Link>
              <img src={logo} alt="" style={{ width: "60px" }} />
            </Link>
            <a className="btn btn-ghost normal-case text-xl">
              CodingDuck Toy World
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <a>
                  Category
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-blue-600">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link>All Toys</Link>
              </li>
              <li>
                <Link>My Toys</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;