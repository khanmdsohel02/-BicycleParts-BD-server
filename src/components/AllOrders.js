import React from 'react';
import { Link } from 'react-router-dom';

const AllOrders = ({ order }) => {
  
    const {_id, partname, orderedquantity, ordercost, imgurl, wheresend,username, phone, useremail } = order;
    return (
        <tr>
        <th><img className="w-16 rounded-full" src={imgurl} alt='img' /></th>
        <td>{partname}</td>
        <td className='pl-14'>{orderedquantity}</td>
        <td className='pl-8'>{ordercost}</td>
        <td>{username}</td>
        <td>{useremail}</td>
        <td>{phone}</td>
        <td className='pl-8'>{wheresend}</td>
        <td>
          {(order.ordercost && !order.paid) ? <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-sm">PAY</button></Link>: <span>PAID</span>}
        </td>
        <td>
          <button class="btn btn-sm" disabled={order.ordercost && order.paid}>DELETE</button>
        </td>
         
        
      </tr>
    );
};

export default AllOrders;