# Employee Management System (EMS)

A React-based Employee Management System that supports secure user authentication, role-based dashboards, task management with status tracking, and centralized state management via React Context API. Data is persisted in browser `localStorage` for seamless offline and reload experiences. The UI features a modern, consistent design using Tailwind CSS.

## 🚀 Project Overview

EMS is a web application designed for efficient employee task management and admin control featuring:

- Distinct login authentication for employees and admins  
- Admin dashboard for creating and monitoring tasks across the team  
- Employee dashboard for viewing and updating individual task statuses  
- Task status lifecycle: New, Accepted, Completed, Failed  
- Centralized, global state managed by React Context API  
- Persistent storage using browser LocalStorage  
- Responsive UI components with fixed-size task cards and gradient styling

## 📦 Features

- **User Authentication:**  
  - Role distinction between Admins and Employees with separate dashboards and functionality.  
- **Task Management:**  
  - Admins create tasks assigned to employees, categorized by status.  
  - Employees can accept, complete, fail, or delete tasks.  
- **Reusable Task Components:**  
  - Fixed width/height cards with colorful gradient backgrounds:  
    - NewTask (Indigo to Purple)  
    - AcceptTask (Red to Amber)  
    - CompleteTask (Green shades)  
    - FailedTask (Purple to Indigo)  
- **State Centralization:**  
  - React Context API manages global user and task data.  
- **LocalStorage Integration:**  
  - Persistent session and data storage.  
- **Consistent and Responsive UI:**  
  - Tailwind CSS facilitates responsiveness and uniform card sizing.

---

## 📁 Project Structure
<img width="285" height="347" alt="image" src="https://github.com/user-attachments/assets/667b1fa2-7b61-4ff1-bd94-a239f5f39568" />

---


## 🛠 Core Components

### 1. AuthenticationProvider (React Context)

- Centralizes authentication, login/logout, and session persistence.  
- Provides global state flags like `user`, `isAdmin`.  
- Validates credentials using data from LocalStorage.

### 2. Task Cards Components

- Uniform sized (w-80 h-80), consistent design with gradients per task status.  
- Truncation (`line-clamp-3`) used for overflow text control.  
- Centered, styled buttons per card type.

### 3. Main Components

- `Header.jsx`: A shared header for dashboards.  
- `TaskListNumbers.jsx`: Shows task summary statistics.

---

## 🔧 Installation & Running
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
npm run dev


Open your browser at [http://localhost:5173](http://localhost:5173).

---

## 🔑 Default Credentials

### Admin

| Email        | Password |
| ------------ | -------- |
| admin@12.com | 123      |

### Employees

| Employee Name   | Email           | Password |
| --------------- | --------------- | -------- |
| Sonam Kandari   | sonam@04.com    | 123      |
| Rishita Rawat   | rishita@12.com  | 123      |
| Harjeet Rawat   | Harjeet@04.com  | 123      |
| Shubham Gairola | shubham@12.com  | 123      |
| Pranjal         | pranjal@12.com  | 123      |

---

## 🚢 Deploying on GitHub Pages

1. Add the `homepage` field in `package.json`:

"homepage": "https://yourusername.github.io/your-repo-name"

2. Install the `gh-pages` package:
   npm install --save gh-pages

3. Add deployment scripts to your `package.json`:
   
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}


4. Deploy the app:

Your app will be live at  
`https://yourusername.github.io/your-repo-name`

---

## 📷 Visual Previews

*You can add screenshots or GIFs of your App here to showcase the UI.*

---

## 💻 Usage Example: Authentication Context
import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthenticationProvider';

const Dashboard = () => {
const { user, isAdmin, logout } = useContext(AuthContext);

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

- Implement backend authentication with hashed passwords and secure APIs.  
- Enrich role-based access control.  
- Add task editing, filtering, sorting, and search capabilities.  
- Improve mobile responsiveness and accessibility (ARIA).  
- Integrate notifications and better error handling.  
- Add comprehensive routing using `react-router`.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss.

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

**Enjoy managing your team's productivity!**

> _If you use this project, a ⭐ star on GitHub is appreciated!_

---

   





