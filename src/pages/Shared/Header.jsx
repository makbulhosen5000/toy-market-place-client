import React, { useContext } from 'react';
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);
  
  // user logout 
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
    toast("Logout Successfully");
  };
  return (
    <div className="lg:mx-10">
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
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/all-toys">All Toys</Link>
            </li>
            <li className='mr-2'>
              <Link to="/my-toys">My Toys</Link>
            </li>

            {user ? (
              <>
                <li className="btn btn-warning">
                  <Link onClick={handleSignOut} to="">
                    Logout
                  </Link>
                </li>
                <li>
                  <Link>{user?.email}</Link>
                </li>
              </>
            ) : (
              <li className="btn btn-warning">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;