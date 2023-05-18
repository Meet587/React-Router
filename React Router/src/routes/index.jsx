//---------- Public Routing -------------
import Login from "../Pages/Public Pages/Login/Login"
import Register from "../Pages/Public Pages/Register/Register"


// ---------------- Private Routing -------------
import Dashbord from "../Pages/Dashbord"

const PublicRoutes =[
    {path:'/login', element:<Login />},
    {path: '/register', element: <Register />}
]

const PrivateRouthing = [
    {path: '/dashbord', element: <Dashbord />}
]