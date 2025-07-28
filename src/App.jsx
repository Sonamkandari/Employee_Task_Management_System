import React, { useContext, useState, useEffect } from 'react';
import './index.css';
import Login from './Component/Authentication/Login';
import EmployeeDashBoard from './Component/DashBoard/EmployeeDashBoard';
import AdminDashboard from './Component/DashBoard/AdminDashboard';
import { AuthContext } from './context/AuthenticationProvider';

const App = () => {
  const [user, setUser] = useState(null); // 'admin' | 'employee' | null
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const userData = useContext(AuthContext);
  // Restore auth state from localStorage on mount
  useEffect(() => {
    const loggedInUserStr = localStorage.getItem('loggedInUser');
    if (loggedInUserStr) {
      try {
        const loggedInUser = JSON.parse(loggedInUserStr);
        if (loggedInUser.role === 'admin') {
          setUser('admin');
        } else if (loggedInUser.role === 'employee') {
          setUser('employee');
          setLoggedInUserData(loggedInUser.data || null);
        }
      } catch (error) {
        console.error('Failed to parse loggedInUser:', error);
        localStorage.removeItem('loggedInUser');
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    // Admin login - check against your admin data dynamically or hardcoded
    if (
      userData &&
      userData.admin &&
      userData.admin.some((a) => a.email === email && a.password === password)
    ) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }

    // Employee login
    if (userData && userData.employees) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
        return;
      }
    }

    alert('Invalid Credentials');
  };

  // Pass logout handler through dashboards if you implement logout
  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard adminData={{ firstName: 'Admin' }} onLogout={handleLogout} />
      ) : user === 'employee' ? (
        <EmployeeDashBoard data={loggedInUserData} onLogout={handleLogout} />
      ) : null}
    </>
  );
};

export default App;
