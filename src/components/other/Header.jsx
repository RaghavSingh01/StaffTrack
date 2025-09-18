import React, { useState, useEffect } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const [username, setUsername] = useState('')
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      if (userData.data && userData.data.firstName) {
        setUsername(userData.data.firstName)
      } else if (userData.role === 'admin') {
        setUsername('Admin')
      }
      setUserRole(userData.role)
    }
  }, [])

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>
              {username ? username.charAt(0).toUpperCase() : 'U'}
            </span>
          </div>
          <div>
            <p className='text-sm text-gray-600 font-medium'>{getGreeting()}</p>
            <h1 className='text-2xl font-bold text-gray-900'>
              {username || 'User'} 👋
            </h1>
            <p className='text-sm text-gray-500 capitalize'>
              {userRole} Dashboard
            </p>
          </div>
        </div>
        
        <div className='flex items-center space-x-3'>
          <div className='text-right'>
            <p className='text-sm text-gray-600'>Current Time</p>
            <p className='text-lg font-semibold text-gray-900'>
              {new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
              })}
            </p>
          </div>
          
          <button 
            onClick={logOutUser} 
            className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center space-x-2 shadow-lg hover:shadow-xl'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header