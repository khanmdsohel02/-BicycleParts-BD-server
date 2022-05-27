import React from 'react';

const MyOrder = ({ order }) => {
    const { partName, orderedQuantity, orderCost, imgUrl, whereSend } = order;
    
    return (
        <tr>
        <th><img className="w-16 rounded-full" src={imgUrl} alt='img' /></th>
        <td>{partName}</td>
        <td className='pl-14'>{orderedQuantity}</td>
        <td className='pl-8'>{orderCost}</td>
        <td className='pl-8'>{whereSend}</td>
        
      </tr>
    );
};

export default MyOrder;