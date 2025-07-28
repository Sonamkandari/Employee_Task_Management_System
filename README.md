## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Employee Task Management System

A modern React-based Employee Task Management System for assigning, tracking, and completing workplace tasks—featuring role-based dashboards, instant context updates, and persistent browser storage. No backend required!

---

## 🚀 Overview

**EMS** provides a robust platform for:
- **Admins**: Create and assign tasks, monitor progress, and manage employee workload from a centralized dashboard.
- **Employees**: View, accept, complete, delete, and update the status of their own tasks.

All data is managed using React Context and is persisted via browser `localStorage`. The UI is styled with Tailwind CSS for a seamless and consistent experience.

---

## 📁 Project Structure

<!-- SCREENSHOT/DIAGRAM PLACEHOLDER -->
> [!NOTE]  
> _You can add a folder tree screenshot here._
<details>
<summary>Click to expand structure</summary>

src/
├── assets/
├── Component/
│ ├── Authentication/
│ │ └── Login.jsx
│ ├── DashBoard/
│ │ ├── AdminDashboard.jsx
│ │ └── EmployeeDashBoard.jsx
│ ├── MainComponents/
│ │ ├── AllTask.jsx
│ │ ├── CreateTask.jsx
│ │ ├── Header.jsx
│ │ └── TaskListNumbers.jsx
│ └── TaskList/
│ ├── AcceptTask.jsx
│ ├── CompleteTask.jsx
│ ├── FailedTask.jsx
│ ├── NewTask.jsx
│ └── TaskList.jsx
├── context/
│ └── AuthenticationProvider.jsx
├── pages/
├── utils/
│ └── LocalStorage.jsx
├── App.jsx
├── index.jsx
├── index.css
└── main.jsx
</details>

---

## ✨ Features

- **Role-based authentication**
    - Admins and Employees view distinct dashboards after login
- **Admin dashboard**
    - Create new tasks, assign to employees, monitor overall task stats
- **Employee dashboard**
    - See "New", "Active", "Completed", and "Failed" tasks, with ability to act on each
- **Instant context updates**
    - Changes reflected across the UI immediately using React Context
- **Persistent storage**
    - All data saved in browser `localStorage`
- **Reusable UI components**
    - Consistent, gradient-based cards for each task status
- **Modern and responsive design**
    - Built with TailwindCSS for excellent appearance on all devices
- **Zero backend**
    - All logic runs client-side, easy to deploy anywhere

---

## 🛠 Tech Stack

- **React** (function components, hooks)
- **React Context API** (global state management)
- **TailwindCSS** (utility-first styling)
- **localStorage** (JS browser API)
- **Vite** (fast dev/build)
- **GitHub Pages** (recommended deployment)

---

## 🔧 Installation & Running

1. **Clone the repository:**

git clone https://github.com/yourusername/employee-task-management-system.git
cd employee-task-management-system

2. **Install dependencies:**
   npm install
3. **Start the development server:**
    npm run dev

  
Open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🔑 Default Credentials

### Admin
| Email        | Password |
|--------------|----------|
| admin@12.com | 123      |

### Employees
| Name             | Email             | Password |
|------------------|-------------------|----------|
| Sonam Kandari    | sonam@04.com      | 123      |
| Rishita Rawat    | rishita@12.com    | 123      |
| Harjeet Rawat    | Harjeet@04.com    | 123      |
| Shubham Gairola  | shubham@12.com    | 123      |
| Pranjal          | pranjal@12.com    | 123      |

---

## 🖼️ Visual UI Snippets

> 🖼️ **Replace these sample links with your actual screenshots or GIF files!**

### Login Page  
`![Login Page](assets/login-page.png)`

---

### Admin Dashboard  
`![Admin Dashboard](assets/admin-dashboard.png)`

---

### Employee Dashboard  
`![Employee Dashboard](assets/employee-dashboard.png)`

---

### Task Cards (New/Active/Completed/Failed)
`![Task Cards](assets/task-cards.png)`

---

### Task Summary Numbers  
`![Task Summary](assets/task-stats.png)`

---

## 💡 How It Works

- **AuthenticationProvider** wraps the app and contains global employee, admin, and session data
- **App.jsx**: Handles routing to dashboards based on login state
- **Admin creates tasks** using a form (dropdown select to pick employee), which then updates context/localStorage and triggers UI refreshes
- **Employees** log in to view only their assigned tasks, instantly interact and update status

---

## 🧩 Core File: App Initialization

// index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthenticationProvider from './context/AuthenticationProvider';

createRoot(document.getElementById('root')).render(
<StrictMode>
<AuthenticationProvider>
<App />
</AuthenticationProvider>
</StrictMode>
);


---

## 🚢 Deploying to GitHub Pages

1. In your `package.json`, add:


2. Install deployment tool:
npm install --save gh-pages

3. In `package.json` scripts, add:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"


4. Deploy in one line:
npm run deploy


---

## 🚀 Future Improvements

- Replace employee name-based task assignment with unique IDs
- Backend authentication and real-time data sync
- Editable and searchable tasks, advanced reporting and analytics
- Toast notifications and error feedback
- Accessibility and mobile-first enhancements
- React Router-powered navigation

---

## 🤝 Contributing

Pull requests and issues are very welcome! For major changes, please open an issue to discuss what you would like to change.

---

## 📄 License

MIT License

---

**Enjoy managing your team’s workflow with the Employee Task Management System!**

> ⭐ If you find this useful, star the repo!


 
>>>>>>> 12ba1cfc68c62f887764d8051028cb76436e69e0
