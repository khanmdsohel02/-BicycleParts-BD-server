import React from 'react';
import PartDeleteModal from './PartDeleteModal';

const ManagePart = ({ part, handleDelete,index }) => {
    const {name, image, quantity, price } = part;

    return (
        <tr>
           
        <th><img className="w-20 rounded" src={image} alt='img' /></th>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><label for={`part-delete-${index}`} className="btn btn-sm bg-indigo-400 hover:bg-indigo-200 hover:text-red-500">dalete</label></td>
        <PartDeleteModal part={part} index={index} handleDelete={handleDelete}/>
      </tr>
    
    );
};

export default ManagePart;