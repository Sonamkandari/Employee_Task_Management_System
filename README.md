# Employee Management System (EMS)

A React-based Employee Management System that includes user authentication, an admin dashboard, task management, and centralized state management using React Context API. LocalStorage is used for data persistence of employees, admins, and session state.

---

## 🚀 Project Overview

EMS is a web application designed for managing employee tasks and admin controls. It features:

- Employee and admin login authentication
- Admin panel to create and monitor tasks
- Employee dashboards to view and update task statuses
- Task status categories: New, Accepted, Completed, Failed
- State management with Context API for centralized data handling
- Data persistence using browser LocalStorage
- Consistent UI components using Tailwind CSS with fixed-size task cards

---

## 📦 Features

- **User Authentication:** Distinguishes between Admin and Employee users with separate dashboards.
- **Task Management:** Create, update, and manage tasks categorized by status.
- **Reusable Components:** Includes task cards (`NewTask`, `AcceptTask`, `CompleteTask`, `FailedTask`) with uniform sizing and styling.
- **State Centralization:** Uses React Context API for global state and authentication management.
- **LocalStorage Integration:** Stores user session and employee/admin data for persistence.
- **Responsive & Consistent UI:** Tailwind CSS based UI with gradients, transitions, truncation to maintain card uniformity.

---

## 📁 Project Structure
<img width="236" height="346" alt="image" src="https://github.com/user-attachments/assets/1669fa52-cf54-4ff5-88b0-7c73123ca4d1" />

src/
├── components/
│ ├── AcceptTask.jsx
│ ├── CompleteTask.jsx
│ ├── FailedTask.jsx
│ ├── NewTask.jsx
│ └── MainComponents/
│ ├── Header.jsx
│ └── TaskListNumbers.jsx
├── contexts/
│ └── AuthenticationProvider.jsx
├── data/
│ └── employees.js
├── utils/
│ └── localStorage.js
├── App.jsx
└── index.js


---

## 🛠 Core Components Details

### 1. AuthenticationProvider (Context)

- Handles login, logout and user session persistence.
- Provides `user`, `isAdmin` flags, and authentication methods globally.
- Checks credentials against LocalStorage employee and admin data.

### 2. Task Cards Components

Each task card shares these common features:
- Fixed width and height (`w-80 h-80`) for consistent appearance.
- Gradient background per status:
  - NewTask: Indigo to Purple
  - AcceptTask: Red to Amber
  - CompleteTask: Green shades
  - FailedTask: Purple to Indigo
- Button centered horizontally, sized with Tailwind utilities.
- Text truncation using `line-clamp-3` for overflow control.

### 3. MainComponents

- **Header.jsx:** A reusable header used by both admin and employee dashboards.
- **TaskListNumbers.jsx:** Displays task-related metrics and statistics.

---

## 🔧 Installation & Running

1. Clone the repo:
   git clone https://github.com/yourusername/ems-task-management.git
   cd ems-task-management

2. Install dependencies:
   npm install  or yarn install

3. Start local development server:
    npm start or yarn start


---

## 📷 Visual Previews

## Login page
<img width="398" height="291" alt="image" src="https://github.com/user-attachments/assets/693589c5-7503-4e3b-8012-16016786d42a" />
---
### Header Component  
![Header Component](https://github.com/user-attachments/assets/1c6982e8-5f7a-496b-b2d9-5dd189161416)

---

### Task List Numbers  
<img width="954" height="174" alt="image" src="https://github.com/user-attachments/assets/7314b0e5-52ce-4e13-8772-bbcf4ea14bef" />

---

### Task List View  
<img width="935" height="542" alt="image" src="https://github.com/user-attachments/assets/263409df-1b11-45f5-bc25-e7fe04389bfe" />


---

### Admin Panel  
<img width="1913" height="872" alt="Admin Panel" src="https://github.com/user-attachments/assets/e7beb91f-dc86-415e-a416-a3db3fd7b6d5" />

---

### EMS Context Diagram  
<img width="897" height="590" alt="image" src="https://github.com/user-attachments/assets/99d3972c-4047-4eff-8d59-5ef3fb12b4e8" />


---

## ⚙️ Usage Example of Authentication Context

import React, { useContext } from 'react';
import { AuthenticationContext } from './contexts/AuthenticationProvider';

const Dashboard = () => {
const { user, isAdmin, logout } = useContext(AuthenticationContext);

return (
<div>
<h1>Welcome, {user?.firstName}</h1>
{isAdmin ? <AdminPanel /> : <EmployeePanel />}
<button onClick={logout}>Logout</button>
</div>
);
};


---

## 🚀 Future Improvements

- Replace plain-text passwords with hashed authentication (backend integration).
- Add role-based access control.
- Enhance responsiveness for smaller devices.
- Integrate with real backend APIs for persistent data.
- Add task filtering, sorting, and search.
- Improve accessibility following ARIA standards.

---

## 🤝 Contributing

Feel free to open issues, suggest features, or submit pull requests to enhance the EMS project.

---

## 📄 License

This project is licensed under the MIT License.

---

If you want me to help generate specific files, scripts, or documentation sections, just ask!
   


