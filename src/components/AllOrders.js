import React from 'react';
import OrderDeleteModal from './OrderDeleteModal';



const AllOrders = ({ order, handleDelete }) => {
  
    const {partname, orderedquantity, ordercost, imgurl, wheresend,client, phone, email } = order;
    return ( 
     
        <> <tr>
        <th><img className="w-16 rounded-full" src={imgurl} alt='img' /></th>
        <td>{partname}</td>
        <td className='pl-14'>{orderedquantity}</td>
        <td className='pl-8'>{ordercost}</td>
        <td>{client}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className='pl-8'>{wheresend}</td>
        <td>
          {(order.ordercost && !order.paid) ? <button className='btn btn-sm bg-indigo-100 text-red-500'>Pending</button>: <button className='btn px-7 btn-sm bg-indigo-500 hover:bg-indigo-500'>PAID</button>}
        </td>
        <td className='pl-8'>
          <label htmlFor="my-delete-modal" class="btn modal-button" disabled={order.ordercost && order.paid}>open modal</label>
          </td>
      </tr>
        <OrderDeleteModal order={order} handleDelete={handleDelete}/>
      </>
     
    );
};

export default AllOrders;

