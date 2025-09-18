# StaffTrack

## Introduction
StaffTrack is a modern, intelligent employee management system designed to streamline team productivity and task management. Built with React and modern web technologies, it provides a comprehensive solution for businesses to track employee tasks, monitor progress, and maintain efficient workflow management. The system features role-based access control with separate dashboards for administrators and employees, real-time task status updates, and an intuitive user interface.

## Project Type
Frontend

## Deployed App
[Frontend](https://staff-track-kohl.vercel.app/)

## Directory Structure
```
StaffTrack/
├─ src/
│  ├─ components/
│  │  ├─ Auth/
│  │  │  └─ Login.jsx
│  │  ├─ Dashboard/
│  │  │  ├─ AdminDashboard.jsx
│  │  │  └─ EmployeeDashboard.jsx
│  │  ├─ TaskList/
│  │  │  ├─ AcceptTask.jsx
│  │  │  ├─ CompleteTask.jsx
│  │  │  ├─ FailedTask.jsx
│  │  │  ├─ NewTask.jsx
│  │  │  └─ TaskList.jsx
│  │  └─ other/
│  │     ├─ AllTask.jsx
│  │     ├─ CreateTask.jsx
│  │     ├─ Header.jsx
│  │     └─ TaskListNumbers.jsx
│  ├─ context/
│  │  └─ AuthProvider.jsx
│  ├─ utils/
│  │  └─ localStorage.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ public/
├─ index.html
└─ package.json
```

## Features
- **Role-Based Authentication**: Secure login system with separate admin and employee access
- **Admin Dashboard**: Comprehensive overview of all employees and their task statistics
- **Employee Dashboard**: Personalized task view with real-time status updates
- **Task Management**: Create, assign, and track tasks with multiple status states
- **Real-Time Updates**: Instant task status changes with localStorage persistence
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Task Status Tracking**: Monitor tasks through New, Active, Completed, and Failed states
- **Employee Statistics**: Visual representation of task counts and performance metrics
- **Modern UI/UX**: Beautiful gradient designs, smooth animations, and intuitive navigation

## Design Decisions or Assumptions
- **localStorage for Data Persistence**: Chose localStorage over a backend database for simplicity and demonstration purposes
- **Component-Based Architecture**: Modular React components for maintainability and reusability
- **Context API for State Management**: Used React Context for global state management instead of external libraries
- **Tailwind CSS**: Selected for rapid development and consistent design system
- **Role-Based Access Control**: Implemented separate dashboards for different user types
- **Task Status Workflow**: Designed a clear progression from New → Active → Completed/Failed
- **Responsive Design**: Prioritized mobile-first approach for accessibility

## Installation & Getting Started
```bash
# Clone the repository
git clone [your-repo-url]
cd EMS

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
 
## Usage
1. **Login**: Use provided credentials to access the system
2. **Admin Access**: View all employees, task statistics, and create new tasks
3. **Employee Access**: View assigned tasks and update their status
4. **Task Management**: Mark tasks as completed or failed from the employee dashboard
5. **Real-Time Updates**: See immediate changes in task counts and status

## Credentials
### Admin Access:
- Email: `admin@example.com`
- Password: `123`

### Employee Access:
- Email: `e@e.com` | Password: `123`
- Email: `employee2@example.com` | Password: `123`
- Email: `employee3@example.com` | Password: `123`
- Email: `employee4@example.com` | Password: `123`
- Email: `employee5@example.com` | Password: `123`

## APIs Used
- **No External APIs**: This is a frontend-only application that uses localStorage for data persistence
- **Browser APIs**: Utilizes localStorage API for data storage and retrieval

 
## Technology Stack
- **Frontend Framework**: React 18 with JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Persistence**: localStorage
- **Development Tools**: ESLint, PostCSS
- **Package Manager**: npm
- **Language**: JavaScript (ES6+)
- **UI Components**: Custom React components with Tailwind CSS
- **Icons**: Heroicons (SVG-based icon system)

## Key Libraries & Dependencies
- React: Modern UI library for building interactive interfaces
- Vite: Fast build tool and development server
- Tailwind CSS: Utility-first CSS framework for rapid UI development
- PostCSS: CSS processing tool for Tailwind CSS
- ESLint: Code quality and consistency tool
