import { Outlet } from 'react-router-dom'
import NavigationBar from '../Dashbord/NavigationBar/NavigationBar'


const DashboardLayout = () => {
  return (
    <div className=''>
      {/* Sidebar Component */}
      <NavigationBar/>
      <div className=''>
        <div className='p-5'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
