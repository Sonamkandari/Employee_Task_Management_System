import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-80 h-80
      bg-gradient-to-br from-green-300 to-teal-500
      rounded-2xl shadow-lg p-6 text-white
      hover:scale-105 transition-transform duration-300
      flex flex-col
    ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h3 className="text-2xl font-bold mt-3 truncate">{data.taskTitle}</h3>
      <p className="text-base mt-3 text-white flex-1 overflow-hidden text-ellipsis line-clamp-3">
        {data.taskDescription}
      </p>
      <div className="mt-4">
        <button className="w-40 h-10 mx-auto block bg-green-600 text-white py-2 rounded shadow hover:bg-green-800 transition-colors">
          Task completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
