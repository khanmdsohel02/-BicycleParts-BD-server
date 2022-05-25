import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from './routes/privateRoutes'
import PrivateRoute from "./authentication/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import { dashboardRoutes } from "./routes/dashboardRoutes";



function App() {
  return (
    
      <Navbar>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />}/>))}
        
       <Route element={<PrivateRoute />}>
        {privateRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} 
        element={<Component />}/>))}
       </Route>

       <Route path = '/dashboard' element={<Dashboard/>}>
        {dashboardRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} 
        element={<Component />}/>))}     
       </Route>
       
       </Routes>
      </Navbar>
  
  );
}

export default App;
