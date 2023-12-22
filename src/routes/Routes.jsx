import { createBrowserRouter } from 'react-router-dom'

// import Home from '../pages/Home/Home'

// import Apartment from '../pages/Apartment/Apartment'
// import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import MainLayout from '../layouts/MainLayout'
import Home from '../Home/Home'
import Login from '../Home/Login/Login'
import Register from '../Home/Register/Register'
import TaskList from '../Dashbord/TaskList/TaskList'
import AddTask from '../Dashbord/AddTask/AddTask'
import TaskManagement from '../Dashbord/TaskManagement/TaskManagement'
import UpdateTask from '../Dashbord/TaskManagement/UpdateTask'
import PrivateRoute from './PrivateRoute'

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
    path: 'dashboard',
    element: (
     

       <DashboardLayout></DashboardLayout>

     
      
    ),
    children: [
      
      
      {
        path:'alltask',
        element: <PrivateRoute>
       
       <TaskList></TaskList>
       
        </PrivateRoute>  
          
    },
    {
        path:'addTask',
        element:  <PrivateRoute>

          <AddTask></AddTask>,

        </PrivateRoute>
        
        

    },
    {
        path:'manageTask',
        element:<TaskManagement></TaskManagement>
    },
    {
      path:'update/:id',
        element:<UpdateTask></UpdateTask>,
        loader:({params})=>fetch(`https://task-management-server-tan.vercel.app/updateTask/${params.id}`)
    }
   
    ],
  },
  
])
