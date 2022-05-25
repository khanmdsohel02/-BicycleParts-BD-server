import MyOrders from '../pages/Dashboard/MyOrders'
import AddReview from '../pages/Dashboard/AddReview'
import AddProduct from '../pages/Dashboard/AddProduct'
import ManageProducts from '../pages/Dashboard/ManageProducts'
import ManageOrders from '../pages/Dashboard/ManageOrders'
import AddAdmin from '../pages/Dashboard/AddAdmin'
import MyProfile from '../pages/Dashboard/MyProfile'



export const dashboardRoutes = [
    {path:'my-orders', name:'MyOrders', Component: MyOrders},
    {path:'add-review', name:'AddReview', Component: AddReview},
    {path:'add-product', name:'AddProduct', Component: AddProduct},
    {path:'manage-products', name:'ManageProducts', Component: ManageProducts},
    {path:'manage-orders', name:'ManageOrders', Component: ManageOrders},
    {path:'add-admin', name:'AddAdmin', Component: AddAdmin},
    {path:'my-profile', name:'MyProfile', Component: MyProfile},
]