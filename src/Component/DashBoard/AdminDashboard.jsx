import React from 'react';
import CreateTask from '../MainComponents/CreateTask';
import Header from '../MainComponents/Header';
import AllTask from '../MainComponents/AllTask';



const AdminDashboard = ({ adminData, onLogout }) => {
 
  return (
    <div className='h-screen max-w-full'>
    {/* Mounting header.jsx here */}
    <Header data={adminData} onLogout={onLogout} />
   
    {/* Mounting Create Task here */}
    <CreateTask/>
      
    {/*Mounting all task here */}
      <AllTask/>

    </div>
  );
};

export default AdminDashboard;


