import PartDetails from "../components/PartDetails";
import Contact from "../pages/Contact";

export const privateRoutes = [
   {path:'/contact', name:'Contact', Component: Contact},
   {path:'/part-details/:id', name:'PartDetails', Component: PartDetails},
   
]