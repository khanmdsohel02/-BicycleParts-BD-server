import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllOrders from '../../components/AllOrders';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    
   console.log(allOrders)
    
    useEffect(() => {
              const getOrders = async () => {
              const url = `http://localhost:5000/orders`;
              const { data } = await axios.get(url);
              setAllOrders(data);
          }
          getOrders()
         
       }, [])
    return (
        <>
        <h1 className='mt-4 text-xl font-semibold text-indigo-700'>MANAGE ORDER'S </h1>
       <div className="overflow-x-auto w-[95%] mt-4">
       <table className="table w-full">
         <thead>
           <tr>
             <th>IMAGE</th>
             <th>PART</th>
             <th>ORDER QUANTITY</th>
             <th>TOTAL COST</th>
             <th>USER NAME</th>
             <th>USER EMAIL</th>
             <th>PHONE</th>
             <th>WHERE SEND(ADDRESS) </th>
             <th>STATUS</th>
             <th>DELETE</th>
           </tr>
         </thead>
         <tbody>
        {allOrders.map(order =>
           <AllOrders
             key={order._id}
             order ={order}
             />,
             )  }
         </tbody>
       </table>
       </div>
       </>
    );
};

export default ManageOrders;