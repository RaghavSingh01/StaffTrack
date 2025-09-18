import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6'>
            <div className='max-w-7xl mx-auto'>
                <Header changeUser={props.changeUser} />
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
                        <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                            <svg className='w-6 h-6 text-emerald-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                            </svg>
                            Create New Task
                        </h2>
                        <CreateTask />
                    </div>
                    
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
                        <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                            <svg className='w-6 h-6 text-blue-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                            </svg>
                            All Tasks Overview
                        </h2>
                        <AllTask />
                    </div>
                </div>
                
                {/* Quick Stats Section */}
                <div className='mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
                    <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                        <svg className='w-6 h-6 text-purple-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                        </svg>
                        Dashboard Statistics
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        <div className='bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-white'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-emerald-100 text-sm'>Total Tasks</p>
                                    <p className='text-2xl font-bold'>24</p>
                                </div>
                                <svg className='w-8 h-8 text-emerald-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                                </svg>
                            </div>
                        </div>
                        
                        <div className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-blue-100 text-sm'>Active Tasks</p>
                                    <p className='text-2xl font-bold'>12</p>
                                </div>
                                <svg className='w-8 h-8 text-blue-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                </svg>
                            </div>
                        </div>
                        
                        <div className='bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-green-100 text-sm'>Completed</p>
                                    <p className='text-2xl font-bold'>8</p>
                                </div>
                                <svg className='w-8 h-8 text-green-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                </svg>
                            </div>
                        </div>
                        
                        <div className='bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-red-100 text-sm'>Failed</p>
                                    <p className='text-2xl font-bold'>4</p>
                                </div>
                                <svg className='w-8 h-8 text-red-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard