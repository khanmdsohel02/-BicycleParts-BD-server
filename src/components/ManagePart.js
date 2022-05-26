import React from 'react';

const ManagePart = ({ part, handleDelete }) => {
    const { name, image, quantity, price } = part;

    return (
        <tr>
           
        <th><img class="w-20 rounded" src={image} alt='img' /></th>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><button onClick={() =>handleDelete(part._id)} class="btn btn-sm bg-indigo-400 hover:bg-indigo-200 hover:text-red-500">dalete</button></td>
      </tr>
    
    );
};

export default ManagePart;