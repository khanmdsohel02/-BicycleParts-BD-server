import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebaseConfig';

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

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
          {user && <li><NavLink to ='/dashboard' className='rounded-lg'>DASHBOARD</NavLink></li>}
          <li>{user? <NavLink onClick={logout} to ='/' className='rounded-lg'>Sign Out</NavLink> :<NavLink to ='/login' className='rounded-lg'>LOGIN</NavLink>}</li> 
          {user?.displayName && <button class="btn btn-outline hover:bg-base-200 hover:text-indigo-500 text-indigo-500 text-xl font-bold ">{ user?.displayName}</button>} 
        </ul>
      </div>
    </div>
   {children}
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-2">
    {user?.displayName && <button class="btn btn-outline hover:bg-base-100 hover:text-indigo-500 text-indigo-500 text-xl font-bold ">{ user?.displayName}</button>}
      <li><NavLink to ='/home' className='rounded-lg'>HOME</NavLink></li>
          <li><NavLink to ='/about' className='rounded-lg'>ABOUT</NavLink></li>
          <li><NavLink to ='/contact' className='rounded-lg'>CONTACT</NavLink></li>
          {user && <li><NavLink to ='/dashboard' className='rounded-lg'>DASHBOARD</NavLink></li>}
          <li>{user? <NavLink onClick={logout} to ='/' className='rounded-lg'>Sign Out</NavLink> :<NavLink to ='/login' className='rounded-lg'>LOGIN</NavLink>}</li> 
    </ul>
  </div>
</div>
    );
};

export default Navbar;