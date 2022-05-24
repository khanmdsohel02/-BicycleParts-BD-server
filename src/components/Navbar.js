import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({children}) => {
    return (
        <div className="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    <div className="w-full navbar fixed top-0 bg-base-200 lg:px-20">
        <div className="flex-1 px-2 mx-2"> <NavLink  to ='/home'><img src={'https://i.ibb.co/pbtb4cg/logo.png'} alt="" /></NavLink> </div>
      <div className="flex-none lg:hidden">
        <label for="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-x-3">
         
          <li><NavLink to ='/home' className='rounded-lg'>HOME</NavLink></li>
          <li><NavLink to ='/about' className='rounded-lg'>ABOUT</NavLink></li>
          <li><NavLink to ='/contact' className='rounded-lg'>CONTACT</NavLink></li>
          <li><NavLink to ='/login' className='rounded-lg'>LOGIN</NavLink></li>  
        </ul>
      </div>
    </div>
   {children}
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-2">
      <li><NavLink to ='/home' className='rounded-lg'>HOME</NavLink></li>
          <li><NavLink to ='/about' className='rounded-lg'>ABOUT</NavLink></li>
          <li><NavLink to ='/contact' className='rounded-lg'>CONTACT</NavLink></li>
          <li><NavLink to ='/login' className='rounded-lg'>LOGIN</NavLink></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;