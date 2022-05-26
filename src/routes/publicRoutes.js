import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";



export const publicRoutes = [
    {path:'/', name:'Home', Component: Home},
    {path:'/about', name:'About', Component: About},
    {path:'/signup', name:'SignUp', Component: SignUp},
    {path:'/login', name:'Login', Component: Login}
]