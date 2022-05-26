import React from 'react';

const ManagePart = ({ part }) => {
    const { name, image, quantity, price } = part;

    return (
        <tr>
           
        <th><img class="w-20 rounded" src={image} alt='img' /></th>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><button class="btn btn-sm">Small</button></td>
      </tr>
    
    );
};

export default ManagePart;