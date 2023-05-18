//---------- Public Routing -------------
import Login from "../Pages/Public Pages/Login/Login"
import Register from "../Pages/Public Pages/Register/Register"


// ---------------- Private Routing -------------
import Dashbord from "../Pages/Dashbord"
import Admin from "../Pages/Admin/Admin"

export const PublicRoutes =[
    {path:'/login', element:<Login />},
    {path: '/register', element: <Register />}
]

export const PrivateRoutes = [
    {path: '/admin', element: <Admin />},
    {path: '/dashbord', element: <Dashbord />}
]