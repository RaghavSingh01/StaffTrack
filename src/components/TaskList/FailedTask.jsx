import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
            <h4 className='text-sm text-white'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-white'>
            {data.taskDescription}
        </p>
        <div className='mt-6'>
            <div className='w-full bg-red-500 rounded font-medium py-2 px-3 text-xs text-white text-center flex items-center justify-center'>
                <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Failed
            </div>
        </div>
    </div>
  )
}

export default FailedTask