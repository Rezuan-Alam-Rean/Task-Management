import { Outlet } from 'react-router-dom'
import NavigationBar from '../Dashbord/NavigationBar/NavigationBar'


const DashboardLayout = () => {
  return (
    <div className='relative '>
      {/* Sidebar Component */}
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
