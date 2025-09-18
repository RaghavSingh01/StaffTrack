import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

const AcceptTask = ({data, taskIndex, employeeId}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const updateTaskStatus = (status) => {
        // Get current data from localStorage
        const { employees } = getLocalStorage()
        
        // Find the employee and update the specific task
        const employeeIndex = employees.findIndex(emp => emp.id === employeeId)
        if (employeeIndex !== -1) {
            // Reset all status flags
            employees[employeeIndex].tasks[taskIndex].active = false
            employees[employeeIndex].tasks[taskIndex].newTask = false
            employees[employeeIndex].tasks[taskIndex].completed = false
            employees[employeeIndex].tasks[taskIndex].failed = false
            
            // Set the new status
            if (status === 'completed') {
                employees[employeeIndex].tasks[taskIndex].completed = true
                employees[employeeIndex].taskCounts.completed += 1
                employees[employeeIndex].taskCounts.active -= 1
            } else if (status === 'failed') {
                employees[employeeIndex].tasks[taskIndex].failed = true
                employees[employeeIndex].taskCounts.failed += 1
                employees[employeeIndex].taskCounts.active -= 1
            }
            
            // Update localStorage
            localStorage.setItem('employees', JSON.stringify(employees))
            
            // Update context
            setUserData(employees)
            
            // Show success message
            alert(`Task marked as ${status}!`)
        }
    }

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
            <div className='flex justify-between mt-6'>
                <button 
                    onClick={() => updateTaskStatus('completed')}
                    className='bg-green-500 hover:bg-green-600 text-white rounded font-medium py-2 px-3 text-sm transition-colors duration-200'
                >
                    Mark as Completed
                </button>
                <button 
                    onClick={() => updateTaskStatus('failed')}
                    className='bg-red-500 hover:bg-red-600 text-white rounded font-medium py-2 px-3 text-sm transition-colors duration-200'
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask