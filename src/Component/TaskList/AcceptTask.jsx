import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 
      w-80 h-80 
      bg-gradient-to-br from-red-400 to-amber-500 
      rounded-2xl shadow-lg p-6 text-white 
      hover:scale-105 transition-transform duration-300
      flex flex-col
    ">
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h3 className="text-2xl font-bold mt-3 truncate">{data.taskTitle}</h3>
      <p className="text-base mt-3 text-white flex-1 overflow-hidden text-ellipsis line-clamp-3">
        {data.taskDescription}
      </p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-800 py-1 px-2 text-sm rounded'>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask;




