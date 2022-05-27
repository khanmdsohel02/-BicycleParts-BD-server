import React from 'react';

const AllOrders = ({ order }) => {
    const { partName, orderedQuantity, orderCost, imgUrl, whereSend,userName, userPhone, userEmail } = order;
    return (
        <tr>
        <th><img className="w-16 rounded-full" src={imgUrl} alt='img' /></th>
        <td>{partName}</td>
        <td className='pl-14'>{orderedQuantity}</td>
        <td className='pl-8'>{orderCost}</td>
        <td>{userName}</td>
        <td>{userEmail}</td>
        <td>{userPhone}</td>
        <td className='pl-8'>{whereSend}</td>
        <td></td>
        <td><button class="btn btn-sm">DELETE</button></td>
        
        
      </tr>
    );
};

export default AllOrders;