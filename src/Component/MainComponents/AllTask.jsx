import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthenticationProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  // Loading check
  if (!authData || !authData.employees) {
    return <div>Loading...</div>;
  }

  return (
    <div id='allTask' className='p-5 rounded mt-5 h-60'>
      {/* Header Row */}
      <div className='bg-gray-800 py-2 mb-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 font-bold text-white'>Employee Name</h2>
        <h3 className='w-1/5 font-bold text-white'>New Task</h3>
        <h3 className='w-1/5 font-bold text-white'>Active Task</h3>
        <h5 className='w-1/5 font-bold text-white'>Completed Task</h5>
        <h5 className='w-1/5 font-bold text-white'>Failed Task</h5>
      </div>
      
      {/* Employee Task Counts */}
      <div id='allTask1' className='overflow-auto'>
        {authData.employees.map((elem) => (
          <div
            key={elem.id}
            className='border-3 border-gray-700 py-2 mb-2 px-4 flex justify-between rounded'
          >
            <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
            <h2 className='w-1/5 text-white'>{elem.taskCounts.newTask}</h2>
            <h3 className='w-1/5 text-yellow-400'>{elem.taskCounts.active}</h3>
            <h5 className='w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
