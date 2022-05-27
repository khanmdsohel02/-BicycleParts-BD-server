import React from 'react';
import { Link } from 'react-router-dom';

const AllOrders = ({ order }) => {
  
    const {_id, partName, orderedQuantity, orderCost, imgUrl, whereSend,userName, userPhone, userEmail } = order;
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
        <td>
          {(order.orderCost && !order.paid) ? <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-sm">PAY</button></Link>: <span>PAID</span>}
        </td>
        <td>
          <button class="btn btn-sm" disabled={order.orderCost && order.paid}>DELETE</button>
        </td>
         
        
      </tr>
    );
};

export default AllOrders;