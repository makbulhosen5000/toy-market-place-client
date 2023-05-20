import React, { useContext, useEffect, useState } from 'react';
import {  FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyToy from './MyToy';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {
    const {loading} = useContext(AuthContext);
    const [myToys,setMyToys] = useState([]);
 
     useEffect(()=>{
        fetch("http://localhost:5000/toys")
        .then(res=> res.json())
        .then(data => setMyToys(data))
        .catch(error => console.log(error))
     })
    return (
      <>
   
        <div className="overflow-x-auto my-10 mx-10">
   
          <div className="flex justify-between">
            <div>
              <h1 className="text-center mb-10 text-2xl font bold">
                <span className="text-red-600">User</span> Information
              </h1>
            </div>
            <div>
              <Link to="/create-my-toy">
                <button className="btn btn-success">
                  <FaPlus /> Create
                </button>
              </Link>
            </div>
          </div>
          <table className="table table-zebra w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>User</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
              {
              myToys.map(myToy=><MyToy key={myToy._id} myToy={myToy} />)
              }
              
            </tbody>
          </table>
        </div>

      </>
    );
};

export default MyToys;