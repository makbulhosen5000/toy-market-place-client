import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const MyToy = ({ myToy }) => {
  return (
    <tr>
      <th>1</th>
      <td>{myToy?.name}</td>
      <td>{myToy?.subcategory}</td>
      <td>{myToy?.price}</td>
      <td>{myToy?.quantity}</td>
      <td>
        <button className="btn btn-primary">
          <FaEdit />
        </button>
        <button className="btn btn-danger ml-2">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default MyToy;