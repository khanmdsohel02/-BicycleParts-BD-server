import React from 'react';
import { NavLink } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile bg-indigo-100">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
         {/* For User & Admin */}
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='my-profile'>My Profile</NavLink></li> 
        {/* For User */}
       <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='my-orders'>My Orders</NavLink></li>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='add-review'>Add Review</NavLink></li>
        {/* For admin */}
       {admin && <div>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='add-product'>Add Product</NavLink></li>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='manage-products'>Manage Products</NavLink></li>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='manage-orders'>Manage Orders</NavLink></li>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='user-role'>Set User Role</NavLink></li>
      </div>}
            
          
    </ul>
  
  </div>
</div>
        
    );
};

export default DashboardSidebar;