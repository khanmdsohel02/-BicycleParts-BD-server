import React from 'react';
import { Link } from 'react-router-dom';

const AllOrders = ({ order, handleDelete }) => {
  
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
          {(order.ordercost && !order.paid) ? <button className='btn btn-sm bg-indigo-100 text-red-500'>Pending</button>: <button className='btn px-7 btn-sm bg-indigo-500 hover:bg-indigo-500'>PAID</button>}
        </td>
        <td className='pl-8'> < button disabled={order.ordercost && order.paid} onClick={() =>handleDelete(_id)} class="btn btn-sm bg-red-600">DELETE</button></td>
         
        
      </tr>
    );
};

export default AllOrders;