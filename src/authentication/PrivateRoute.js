import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import auth from '../firebaseConfig';

const PrivateRoute = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
   
     if (loading) {
       return <Loading/>
     }
  
    if (!user) {
      return <Navigate to='/login' state={{from: location}} replace />
  }
    return <Outlet/>;
};

export default PrivateRoute;