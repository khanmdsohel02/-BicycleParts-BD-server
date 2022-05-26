import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import auth from '../firebaseConfig';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
   
     if (loading || adminLoading) {
       return <Loading/>
     }
  
  if (!user || !admin) {
      signOut(auth);
      return <Navigate to='/login' state={{from: location}} replace />
  }
    return <Outlet/>;
};

export default AdminRoute;