import React from 'react';

const TaskListNumbers = ({data}) => {
  
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

        {/* New Tasks */}
        <div className='w-[45%] bg-gradient-to-br from-gray-800 to-slate-900 rounded-2xl shadow-xl p-4'>
          <h2 className='text-5xl font-bold text-white'>{data.taskCounts.newTask}</h2>
          <h3 className='text-xl font-medium text-gray-300 mt-3'>New Tasks</h3>
        </div>

        {/* In Progress */}
        <div className='w-[45%] bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl shadow-xl p-4'>
          <h2 className='text-5xl font-bold text-white'>{data.taskCounts.completed}</h2>
          <h3 className='text-xl font-medium text-cyan-100 mt-3'>Completed Task</h3>
        </div>

        {/* Pending Review */}
        <div className='w-[45%] bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl shadow-xl p-4'>
          <h2 className='text-5xl font-bold text-white'>{data.taskCounts.active}</h2>
          <h3 className='text-xl font-medium text-white mt-3'>Accepted Task</h3>
        </div>

        {/* Completed */}
        <div className='w-[45%] bg-gradient-to-br from-emerald-600 to-green-400 rounded-2xl shadow-xl p-4'>
          <h2 className='text-5xl font-bold text-white'>{data.taskCounts.failed}</h2>
          <h3 className='text-xl font-medium text-emerald-100 mt-3'>failed</h3>
        </div>
    
    </div>
  );
};

export default TaskListNumbers;
