import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div class=" mt-24">
            <DashboardSidebar>
               <Outlet/>
            </DashboardSidebar>
       </div>
    );
};

export default Dashboard;