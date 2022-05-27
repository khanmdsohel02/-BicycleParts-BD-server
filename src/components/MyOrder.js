import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order, handleDelete }) => {
    const {_id, partName, orderedQuantity, orderCost, imgUrl, whereSend } = order;
    
    return (
        <tr>
        <th><img className="w-16 rounded-full" src={imgUrl} alt='img' /></th>
        <td>{partName}</td>
        <td className='pl-14'>{orderedQuantity}</td>
        <td className='pl-8'>{orderCost}</td>
        <td className='pl-8'>{whereSend}</td>
        <td>
          {(order.orderCost && !order.paid) ? <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-sm">PAY</button></Link>: <span>PAID</span>}
        </td>
        <td className='pl-8'> < button disabled={order.orderCost && order.paid} onClick={() =>handleDelete(_id)} class="btn btn-sm">DELETE</button></td>
        
      </tr>
    );
};

export default MyOrder;