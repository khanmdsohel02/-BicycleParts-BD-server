import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../firebaseConfig';
import { HiOutlineLogout } from 'react-icons/hi';


const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  const { pathname } = useLocation();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

    return (
        <div className="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    <div className="w-full navbar fixed top-0 bg-base-200 lg:px-20 z-50">
    {pathname.includes("dashboard") && (<label htmlFor="my-drawer-2" tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>)}
      
        <div className="flex-1 px-2 mx-2"> <NavLink  to ='/'><img src={'https://i.ibb.co/JthZQLt/logo.png'} alt="" /></NavLink> </div>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-x-3">
         
          <li><NavLink to ='/' className='rounded-lg font-semibold'>HOME</NavLink></li>
          <li><NavLink to ='/portfolio' className='rounded-lg font-semibold'>MY PORTFOLIO</NavLink></li>
          <li><NavLink to ='/blogs' className='rounded-lg font-semibold'>BLOGS</NavLink></li>
          {user && <li><NavLink to ='/dashboard/my-profile' className='rounded-lg font-semibold'>DASHBOARD</NavLink></li>}
          <li>{user? <Link onClick={logout} to ='/' className='rounded-lg font-semibold bg-indigo-100'><span className='text-2xl text-indigo-500'><HiOutlineLogout/></span>SIGN OUT</Link> :<NavLink to ='/login' className='rounded-lg font-semibold'>LOGIN</NavLink>}</li> 
          {user?.displayName && <button className="btn btn-outline hover:bg-base-200 hover:text-indigo-500 text-indigo-500 text-xl font-bold ">{ user?.displayName}</button>}
          
                <div className='mt-2'>
                {user && <img className='h-10 w-10 rounded-full' src={user?.photoURL || 'https://i.ibb.co/XCkK8mp/logoo.png'} alt="logo" />}
                </div> 
        </ul>
      </div>
    </div>
   {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-2">
    {user?.displayName && <button className="btn btn-outline hover:bg-base-100 hover:text-indigo-500 text-indigo-500 text-xl font-bold ">{ user?.displayName}</button>}
    {user && <img className='h-10 w-10 rounded-full ml-3' src={user?.photoURL || 'https://i.ibb.co/XCkK8mp/logoo.png'} alt="logo" />}
      <li><NavLink to ='/' className='rounded-lg font-semibold'>HOME</NavLink></li>
      <li><NavLink to ='/portfolio' className='rounded-lg font-semibold'>MY PORTFOLIO</NavLink></li>
          <li><NavLink to ='/blogs' className='rounded-lg font-semibold'>BLOGS</NavLink></li>
          {user && <li><NavLink to ='/dashboard' className='rounded-lg font-semibold'>DASHBOARD</NavLink></li>}
          <li>{user? <Link onClick={logout} to ='/' className='rounded-lg font-semibold bg-indigo-100'><span className='text-2xl text-indigo-500'><HiOutlineLogout/></span>SIGN OUT</Link> :<NavLink to ='/login' className='rounded-lg font-semibold'>LOGIN</NavLink>}</li> 
    </ul>
  </div>
</div>
    );
};

export default Navbar;