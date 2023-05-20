import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToy = ({ myToy }) => {
    
    const [toys,setToys] = useState([])

    // delete myToys
    const deleteMyToyHandler = (_id) =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("delete");
            fetch(`http://localhost:5000/toys/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire(
                    "Deleted!",
                    "Data deleted Successfully.",
                    "success"
                  );
                }
                const remaining = toys.filter((toy) => toy._id !== _id);
                setToys(remaining);
              });
          }
        });
    }
  return (
    <tr>
      <td>
        <img src={myToy?.photo} alt="" className='w-[25%]' />
      </td>
      <td>{myToy?.name}</td>
      <td>{myToy?.subcategory}</td>
      <td>${myToy?.price}</td>
      <td>{myToy?.quantity}</td>
      <td>
        <Link to={`/updateToy/${myToy?._id}`}>
          <button className="btn btn-primary">
            <FaEdit />
          </button>
        </Link>
        <button
          onClick={() => deleteMyToyHandler(myToy?._id)}
          className="btn btn-danger ml-2"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default MyToy;