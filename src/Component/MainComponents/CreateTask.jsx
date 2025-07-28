
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthenticationProvider';

const CreateTask = () => {
  const { employees, updateEmployees } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!assignTo) {
      alert('Please select an employee to assign the task.');
      return;
    }

    const task = {
      id: Date.now(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName === assignTo) {
        return {
          ...emp,
          tasks: emp.tasks ? [...emp.tasks, task] : [task],
          taskCounts: {
            ...emp.taskCounts,
            newTask: (emp.taskCounts?.newTask || 0) + 1,
          },
        };
      }
      return emp;
    });

    updateEmployees(updatedEmployees);
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/80 backdrop-blur-md shadow-2xl rounded-xl p-8 space-y-8 border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-white tracking-wide">Create a New Task</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-300 mb-1 tracking-wide">
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Create an Animal Help Application"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-300 mb-1 tracking-wide">
                Date
              </label>
              <input
                id="date"
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="assignTo" className="block text-sm font-semibold text-gray-300 mb-1 tracking-wide">
                Assign To
              </label>
              <select
                id="assignTo"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                required
              >
                <option value="" disabled>Select Employee</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.firstName}>
                    {emp.firstName} {emp.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-300 mb-1 tracking-wide">
                Category
              </label>
              <input
                id="category"
                type="text"
                placeholder="Design, Development, AI/ML, etc."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-1 tracking-wide">
              Description
            </label>
            <textarea
              id="description"
              rows="8"
              placeholder="Describe the task..."
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition duration-200"
              required
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-800 transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;



// import { useState } from "react";
// const CreateTask = () => {
//   // useState hooks holding form data
//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskDate, setTaskDate] = useState("");
//   const [assignTo, setAssignTo] = useState("");
//   const [category, setCategory] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const task = {
//       taskTitle,
//       taskDescription,
//       taskDate,
//       category,
//       active: false,
//       newTask: true,
//       failed: false,
//       completed: false,
//     };

//     const data = JSON.parse(localStorage.getItem("employees")) || [];

//     data.forEach((elem) => {
//       if (assignTo === elem.firstName) {
//         elem.tasks.push(task);
//         elem.taskCounts.newTask = (elem.taskCounts.newTask || 0) + 1;
//       }
//     });

//     localStorage.setItem("employees", JSON.stringify(data));

//     // Clear form fields
//     setTaskTitle("");
//     setTaskDate("");
//     setCategory("");
//     setAssignTo("");
//     setTaskDescription("");
//   };

//   // Form fields data for dynamic rendering
//   const fieldsData = {
//     title: {
//       type: "text",
//       placeholder: "Create an Animal Help Application",
//       value: taskTitle,
//       onChange: (e) => setTaskTitle(e.target.value),
//       label: "Title",
//       id: "title",
//     },
//     date: {
//       type: "date",
//       placeholder: "",
//       value: taskDate,
//       onChange: (e) => setTaskDate(e.target.value),
//       label: "Date",
//       id: "date",
//     },
//     assignTo: {
//       type: "text",
//       placeholder: "Employee Name",
//       value: assignTo,
//       onChange: (e) => setAssignTo(e.target.value),
//       label: "Assign To",
//       id: "assignTo",
//     },
//     category: {
//       type: "text",
//       placeholder: "Design, Development, AI/ML, etc.",
//       value: category,
//       onChange: (e) => setCategory(e.target.value),
//       label: "Category",
//       id: "category",
//     },
//   };

//   return (
//     <div className="mt-8 max-w-4xl mx-auto">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-900/80 backdrop-blur-md shadow-2xl rounded-xl p-8 space-y-8 border border-gray-700"
//       >
//         <h2 className="text-3xl font-bold text-white tracking-wide">
//           Create a New Task
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="space-y-6">
//             {Object.entries(fieldsData).map(([key, props]) => (
//               <div key={key}>
//                 <label
//                   htmlFor={props.id}
//                   className="block text-sm font-semibold text-gray-300 mb-1 tracking-wide"
//                 >
//                   {props.label}
//                 </label>
//                 <input
//                   id={props.id}
//                   name={key}
//                   type={props.type}
//                   placeholder={props.placeholder}
//                   value={props.value}
//                   onChange={props.onChange}
//                   className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
//                   required
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col">
//             <label
//               htmlFor="description"
//               className="block text-sm font-semibold text-gray-300 mb-1 tracking-wide"
//             >
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               rows="8"
//               placeholder="Describe the task..."
//               value={taskDescription}
//               onChange={(e) => setTaskDescription(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition duration-200"
//               required
//             />
//           </div>
//         </div>

//         <div className="w-full flex justify-end">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-800 transition duration-200"
//           >
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
