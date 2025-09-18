import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const [userData, setUserData] = useContext(AuthContext)

   return (
    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
        <h2 className='text-xl font-bold text-gray-900 mb-6 flex items-center'>
            <svg className='w-6 h-6 text-purple-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
            </svg>
            Employee Task Overview
        </h2>
        
        {/* Header Row */}
        <div className='bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl p-4 mb-4'>
            <div className='grid grid-cols-5 gap-4 text-center'>
                <h3 className='font-semibold'>Employee Name</h3>
                <h3 className='font-semibold'>New Tasks</h3>
                <h3 className='font-semibold'>Active Tasks</h3>
                <h3 className='font-semibold'>Completed</h3>
                <h3 className='font-semibold'>Failed</h3>
            </div>
        </div>
        
        {/* Employee Rows */}
        <div className='space-y-3'>
            {userData && userData.map((elem, idx) => (
                <div key={idx} className='bg-gray-50 hover:bg-gray-100 rounded-xl p-4 border border-gray-200 transition-colors duration-200'>
                    <div className='grid grid-cols-5 gap-4 text-center items-center'>
                        <div className='text-left'>
                            <h4 className='font-semibold text-gray-900'>{elem.firstName}</h4>
                            <p className='text-sm text-gray-500'>{elem.email}</p>
                        </div>
                        <div className='bg-blue-100 text-blue-800 px-3 py-2 rounded-lg font-medium'>
                            {elem.taskCounts.newTask}
                        </div>
                        <div className='bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg font-medium'>
                            {elem.taskCounts.active}
                        </div>
                        <div className='bg-green-100 text-green-800 px-3 py-2 rounded-lg font-medium'>
                            {elem.taskCounts.completed}
                        </div>
                        <div className='bg-red-100 text-red-800 px-3 py-2 rounded-lg font-medium'>
                            {elem.taskCounts.failed}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {!userData && (
            <div className='text-center py-8 text-gray-500'>
                <svg className='w-12 h-12 mx-auto mb-4 text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                </svg>
                <p>No employee data available</p>
            </div>
        )}
    </div>
  )
}

export default AllTask