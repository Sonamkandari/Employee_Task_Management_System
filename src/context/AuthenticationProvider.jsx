
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const DEFAULT_DATA = {
  admin: [{ email: 'admin@example.com', password: 'admin123', firstName: 'Admin' }],
  employees: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'john123',
      tasks: [],
      taskCounts: { newTask: 0, active: 0, completed: 0, failed: 0 },
    },
    // ... add more employees as needed
  ],
};

const AuthenticationProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    // Try to load from localStorage synchronously on init, fallback to defaults
    try {
      const storedAdmin = JSON.parse(localStorage.getItem('admin'));
      const storedEmployees = JSON.parse(localStorage.getItem('employees'));
      if (storedAdmin && storedEmployees) {
        return { admin: storedAdmin, employees: storedEmployees };
      } else {
        // Seed localStorage if missing
        localStorage.setItem('admin', JSON.stringify(DEFAULT_DATA.admin));
        localStorage.setItem('employees', JSON.stringify(DEFAULT_DATA.employees));
        return DEFAULT_DATA;
      }
    } catch (e) {
      // If parsing error, reset to defaults
      localStorage.setItem('admin', JSON.stringify(DEFAULT_DATA.admin));
      localStorage.setItem('employees', JSON.stringify(DEFAULT_DATA.employees));
      return DEFAULT_DATA;
    }
  });

  // If you want to re-sync userData on mount or updates, uncomment below:
  /*
  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem('admin'));
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    setUserData({
      admin: storedAdmin || DEFAULT_DATA.admin,
      employees: storedEmployees || DEFAULT_DATA.employees,
    });
  }, []);
  */

  // Function to update employees in context state and localStorage
  const updateEmployees = (newEmployees) => {
    setUserData((prev) => ({ ...prev, employees: newEmployees }));
    localStorage.setItem('employees', JSON.stringify(newEmployees));
  };

  // You can also provide updateAdmin similarly if needed

  return (
    <AuthContext.Provider value={{ ...userData, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationProvider;



// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// const AuthenticationProvider = ({ children }) => {
//   const [userData, setUserData] = useState({ admin: [], employees: [] });

//   useEffect(() => {
//     const employeesLS = localStorage.getItem('employees');
//     const adminLS = localStorage.getItem('admin');

//     if (!employeesLS || !adminLS) {
//       const defaultData = {
//         admin: [{ email: 'admin@example.com', password: 'admin123', firstName: 'Admin' }],
//         employees: [
//           {
//             id: 1,
//             firstName: 'John',
//             lastName: 'Doe',
//             email: 'john@example.com',
//             password: 'john123',
//             tasks: [],
//             taskCounts: { newTask: 0, active: 0, completed: 0, failed: 0 },
//           },
//           // Add more employees here as needed
//         ],
//       };
//       localStorage.setItem('admin', JSON.stringify(defaultData.admin));
//       localStorage.setItem('employees', JSON.stringify(defaultData.employees));
//     }

//     const storedAdmin = JSON.parse(localStorage.getItem('admin'));
//     const storedEmployees = JSON.parse(localStorage.getItem('employees'));

//     setUserData({
//       admin: storedAdmin || [],
//       employees: storedEmployees || [],
//     });
//   }, []);

//   // Update employees and persist
//   const updateEmployees = (newEmployees) => {
//     setUserData((prev) => ({ ...prev, employees: newEmployees }));
//     localStorage.setItem('employees', JSON.stringify(newEmployees));
//   };

//   return (
//     <AuthContext.Provider value={{ ...userData, updateEmployees }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default AuthenticationProvider;


// import React, { createContext, useState, useEffect } from 'react';
// import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

// export const AuthContext = createContext();

// const AuthenticationProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Initialize localStorage if empty
//     if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
//       setLocalStorage();
//     }

//     const storedData = getLocalStorage();
//     setUserData(storedData);
//   }, []);

//   return (
//     <AuthContext.Provider value={userData}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthenticationProvider;