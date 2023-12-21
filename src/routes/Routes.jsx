import { createBrowserRouter } from 'react-router-dom'

// import Home from '../pages/Home/Home'

// import Apartment from '../pages/Apartment/Apartment'
// import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import MainLayout from '../layouts/MainLayout'
import Home from '../Home/Home'
import Login from '../Home/Login/Login'
import Register from '../Home/Register/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // { path: '/Apartment', 
      // element:  <Apartment></Apartment> , 
      // },
    ],
  },
  {
    path: "/login",
    element:<Login></Login>,
  },
  {
    path: "/register",
    element:<Register></Register>,
  },

  {
    path: '/dashboard',
    element: (
     
        <DashboardLayout></DashboardLayout>
      
    ),
    children: [
      
      
    //   {
    //     path:'/',
    //     element:
    // },
    // {
    //     path:'/addTask',
    //     element:

    // },
    // {
    //     path:'/manageTask',
    //     element:
    // },
    ],
  },
  
])
