import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6'>
      <div className='max-w-7xl mx-auto'>
        <Header changeUser={props.changeUser} data={props.data}/>
        
        <div className='grid grid-cols-1 gap-6'>
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
            <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
              <svg className='w-6 h-6 text-blue-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
              </svg>
              Task Overview
            </h2>
            <TaskListNumbers data={props.data} />
          </div>
          
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
            <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
              <svg className='w-6 h-6 text-emerald-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
              </svg>
              My Tasks
            </h2>
            <TaskList data={props.data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard