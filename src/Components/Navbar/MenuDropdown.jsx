/* eslint-disable react/no-unescaped-entities */
import { AiOutlineMenu } from 'react-icons/ai'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../assets/images/placeholder.jpg'
import  { AuthContext } from '../../Provider/AuthProvider'


const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useContext(AuthContext);
  

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className=' md:block'>
         <p className='text-lg font-extrabold font-serif'>
         Task-Management

       </p>
       </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-2 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className=' md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
            
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm text-center'>
          <div className='flex flex-col cursor-pointer'>

            <p className='text-center mt-4 mb-1  font-bold'> {user && user?.displayName} </p>

          <Link
            to='/'
            className='block md:hidden px-4 py-3 text-decoration-none hover:bg-neutral-100 transition font-semibold'
          >
            Home
          </Link>

          <Link
            to='dashboard/alltask'
            className='block md:hidden px-4 py-3 text-decoration-none hover:bg-neutral-100 transition font-semibold'
          >
           All Task
          </Link>
          <Link
              to='dashboard/addTask'
              className='px-4 block md:hidden py-3 text-decoration-none text-red-500  hover:bg-slate-700 transition font-bold'
            >
              add Task
            </Link>

            {user ? (
              <>
                <Link
                  to='/dashboard'
                  className='px-4 py-3 text-decoration-none text-red-600 hover:bg-neutral-100 transition font-semibold'
                >
                  Dashboard
                </Link>
                <div
                  onClick={logout}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                >
                  logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown


















