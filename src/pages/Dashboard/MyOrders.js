import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';
import MyOrder from '../../components/MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
   console.log(myOrders)
    
    useEffect(() => {
           const email = user?.email;
        if (email) {
              const getMyOrder = async () => {
              const url = `http://localhost:5000/my-order?email=${email}`;
              const { data } = await axios.get(url);
              setMyOrders(data);
          }
          getMyOrder()
         }
       }, [user])
  
    return (
        
        <>
        <h1 className='mt-4 text-xl font-semibold text-indigo-700'>YOUR ORDER'S </h1>
       <div className="overflow-x-auto w-3/5 mt-4">
       <table className="table w-full">
         <thead>
           <tr>
             <th>IMAGE</th>
             <th>PART</th>
             <th>ORDER QUANTITY</th>
             <th>TOTAL COST</th>
             <th>WHERE SEND(ADDRESS) </th>
           </tr>
         </thead>
         <tbody>
        {myOrders.map(order =>
           <MyOrder
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

export default MyOrders;