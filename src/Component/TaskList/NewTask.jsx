import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div
      className="flex-shrink-0 w-80 h-80
        bg-gradient-to-br from-indigo-500 to-purple-700
        rounded-2xl shadow-lg p-6 text-gray-900
        hover:scale-105 transition-transform duration-300
        flex flex-col"
    >
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h3 className="text-2xl font-bold mt-3 truncate">{data.taskTitle}</h3>
      <p className="text-base mt-3 text-gray-800 flex-1 overflow-hidden text-ellipsis line-clamp-3">
        {data.taskDescription}
      </p>
      <div className="mt-4">
        <button className="w-full bg-green-500 text-white py-2 rounded shadow hover:bg-green-600 transition-colors">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
