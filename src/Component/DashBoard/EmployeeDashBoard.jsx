import React from 'react'
import Header from '../MainComponents/Header'
import TaskListNumbers from '../MainComponents/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashBoard = ({ data, onLogout }) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        {/* Mounting header.jsx component in the EmployeeDashBoard */}
        <Header data={data} onLogout={onLogout} />
        {/* Mounting TaskListNumber.jsx component in the EmployeeDashBoard */}
        <TaskListNumbers data={data}/>
        {/* Mounting TaskList.jsx Component in the EmployeeDashBoard */}
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashBoard




