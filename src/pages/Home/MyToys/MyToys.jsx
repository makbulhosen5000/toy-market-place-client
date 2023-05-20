import React from 'react';
import { FaDiagnoses, FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToys = () => {
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Cy Ganderton</td>
                <td>Cy Ganderton</td>
                <td>
                  <button className="btn btn-primary">
                    <FaEdit />
                  </button>
                  <button className="btn btn-danger ml-2">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
};

export default MyToys;