import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Blogs from "../pages/Blogs";
import MyPortfolio from "../pages/MyPortfolio";



export const publicRoutes = [
    {path:'/blogs', name:'Blogs', Component: Blogs},
    {path:'/', name:'Home', Component: Home},
    {path:'/portfolio', name:'MyPortfolio', Component: MyPortfolio},
    {path:'/signup', name:'SignUp', Component: SignUp},
    {path:'/login', name:'Login', Component: Login}
]