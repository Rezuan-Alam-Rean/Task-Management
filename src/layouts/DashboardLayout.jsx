import { Outlet } from 'react-router-dom'
import NavigationBar from '../Dashbord/NavigationBar/NavigationBar'
// import TaskList from '../Dashbord/TaskList/TaskList'


const DashboardLayout = () => {
  return (
    <div className='relative '>
     
      <NavigationBar/>
      
      <div className=''>
        <div className='p-1'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
