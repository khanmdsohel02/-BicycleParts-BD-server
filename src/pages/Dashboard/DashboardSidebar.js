import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({children}) => {
    return (
        <div class="drawer drawer-mobile bg-indigo-100">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    {children}
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {/* For User */}
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='my-orders'>My Orders</NavLink></li>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='add-review'>Add Review</NavLink></li>
          {/* For Admin */}
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='add-product'>Add Product</NavLink></li>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='manage-products'>Manage Products</NavLink></li>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='manage-orders'>Manage Orders</NavLink></li>
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='add-admin'>Add Admin</NavLink></li>
          {/* For User & Admin */}
      <li className='mb-2 bg-indigo-400 text-white text-xl rounded-2xl'>
          <NavLink to='my-profile'>My Profile</NavLink></li> 
    </ul>
  
  </div>
</div>
        
    );
};

export default DashboardSidebar;