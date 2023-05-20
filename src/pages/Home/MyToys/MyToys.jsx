import React, { useEffect, useState } from 'react';
import {  FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyToy from './MyToy';
import Search from './Search';
import useTitle from '../../Title/UseTitle';

const MyToys = () => {
    useTitle("My Toys")
    const [myToys,setMyToys] = useState([]);
    //filterToys uses for searching and store myToys value 
    const [filterToys,setFilterToys] = useState(myToys);
 
     useEffect(()=>{
        fetch("http://localhost:5000/toys")
        .then(res=> res.json())
        .then(data => setMyToys(data))
        .catch(error => console.log(error))
     })

     const handleSearch = (searchValue) =>{
        let value = searchValue.toLowerCase();
        const newToys = myToys.filter((myTy)=>{
          const toyName = myTy.name.toLowerCase();
          return toyName.startsWith(value);
        });
        setFilterToys(newToys);
     }
    return (
      <>
        <div className="overflow-x-auto my-10 mx-10 text-center">
          <Search onSearch={handleSearch} />

          <div className="flex justify-between">
            <div>
              <h1 className=" mb-10 text-2xl font bold">
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
          <table className="text-center table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th width="20%">Photo</th>
                <th>Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterToys.map((myToy) => (
                <MyToy key={myToy._id} myToy={myToy} />
              ))}
            </tbody>
          </table>
        </div>
      </>
  )};

export default MyToys;