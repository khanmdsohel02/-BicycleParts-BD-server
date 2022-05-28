import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order, handleDelete }) => {
    const {_id, partname, orderedquantity, ordercost, imgurl, wheresend,transactionId } = order;
    
    return (
        <tr>
        <th><img className="w-16 rounded-full" src={imgurl} alt='img' /></th>
        <td>{partname}</td>
        <td className='pl-14'>{orderedquantity}</td>
        <td className='pl-8'>{ordercost}</td>
        <td className='pl-8'>{wheresend}</td>
        <td>
          {(order.ordercost && !order.paid) ? <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-sm bg-indigo-500">PLEASE PAY</button></Link>: <button className=' btn btn-sm px-8 bg-indigo-300 hover:bg-indigo-300'>PAID</button>}
        </td>
        <td className='pl-8'> < button disabled={order.ordercost && order.paid} onClick={() => handleDelete(_id)} class="btn btn-sm bg-red-500">DELETE</button></td>
        <td className='pl-8'>{transactionId}</td>
        
      </tr>
    );
};

export default MyOrder;