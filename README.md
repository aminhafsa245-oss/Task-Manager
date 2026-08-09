# Task Manager

A full-stack Task Manager application built with **React, Context API, Node.js, Express, and SQLite**.

This project focuses on managing application state cleanly as the application grows, reducing prop drilling through shared state, and providing a better user experience with skeleton loaders, loading indicators, and empty states.

---

## 🚀 Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Search tasks by title
- Filter tasks by status
- View total tasks
- View pending tasks
- View completed tasks
- Global state management using React Context API
- Shared state between multiple components
- Skeleton loader while fetching tasks
- Loading feedback during Add/Update operations
- Empty state when no tasks are available
- Toast notifications
- Responsive dashboard design
- SQLite database for persistent data storage
- REST API integration

---

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- React Context API
- React Icons
- React Toastify
- CSS

### Backend

- Node.js
- Express.js
- SQLite
- CORS

### Tools

- VS Code
- Git
- GitHub
- npm

---

## 📂 Project Structure

```text
task-manager/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── tasks.db
│
├── frontend/
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskSkeleton.jsx
│   │   │
│   │   ├── context/
│   │   │   └── TaskContext.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── styles/
│   │   │   └── styles.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── index.html
│
└── README.md
🏗️ Application Architecture

The application follows a full-stack architecture:

┌──────────────────────┐
│   React Frontend     │
│                      │
│  TaskForm            │
│  TaskList            │
│  Search / Filter     │
└──────────┬───────────┘
           │
           │ REST API
           ↓
┌──────────────────────┐
│   Express Backend    │
│                      │
│  GET                 │
│  POST                │
│  PUT                 │
│  DELETE              │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│    SQLite Database   │
└──────────────────────┘
🌐 Global State Management

As applications become larger, passing data through props between multiple components can become difficult to maintain.

This project uses React Context API to manage shared task-related state.

Context API manages:
Tasks
Filtered tasks
Task title
Task status
Search term
Filter status
Loading states
Edit state
Add task
Update task
Delete task

Components access the shared state through a custom hook:

const {
  filteredTasks,
  handleEdit,
  handleDelete
} = useTasks();

This allows components to access the required data directly without unnecessary prop drilling.

🔄 Refactoring Prop Drilling

Two major features were refactored to use shared state.

1. Task Form

Previously, TaskForm received several values and functions through props.

The component now gets them directly from TaskContext.

It accesses:

Task title
Task status
Add task function
Update task function
Edit state
Loading state
Cancel edit function
2. Task List

TaskList also uses the shared Context state.

It accesses:

Filtered tasks
Edit task function
Delete task function
Initial loading state

This makes the component simpler and avoids passing multiple props from the parent component.

⏳ Loading States

The application provides visual feedback whenever data is being loaded or modified.

Initial Data Fetching

When tasks are being fetched from the backend, the application displays a skeleton loader.

Instead of showing a blank screen:

Loading...

the user sees a visual placeholder representing the task content.

Example:

┌──────────────────────────────┐
│ ███████████████              │
│ █████                         │
│                               │
│ ██████   ██████              │
└──────────────────────────────┘

This provides a better user experience while waiting for the API response.

CRUD Loading

During Add and Update operations, the submit button changes to:

Saving...

The form controls are temporarily disabled to prevent duplicate requests.

📋 Empty States

The application handles situations where there are no tasks to display.

For example, if the user searches for a task that doesn't exist, the application displays:

        📋

   No Tasks Found

Add a new task or change
your search/filter.

This is more informative than displaying a blank task list.

🔎 Search and Filtering

The application provides task search and filtering functionality.

Search

Users can search tasks by their title.

🔍 Search tasks...
Filter

Tasks can be filtered using:

All Tasks
Pending
Completed

Search and filtering are handled using the shared Context state.

📊 Task Statistics

The dashboard provides real-time task statistics:

Total Tasks     Pending Tasks     Completed Tasks
     3                1                 2

These values are calculated from the current task data.

✏️ Task Management

Users can perform complete CRUD operations.

Create

Users can create a new task by entering:

Task title
Task status
Read

Existing tasks are loaded from the backend and displayed in the dashboard.

Update

Users can edit an existing task and update its title or status.

Delete

Users can delete tasks after confirming the deletion.

🔔 Notifications

The application uses React Toastify to provide feedback to the user.

Notifications are displayed for:

Task added successfully
Task updated successfully
Task deleted successfully
API errors
Validation errors
📱 Responsive Design

The dashboard is designed to work across different screen sizes.

On larger screens:

┌──────────────────┬────────────────────────┐
│                  │                        │
│   Task Form      │      Task List         │
│                  │                        │
└──────────────────┴────────────────────────┘

On smaller screens, the sections automatically stack vertically for better usability.

⚙️ Installation
1. Clone the Repository
https://github.com/aminhafsa245-oss/Task-Manager

Navigate into the project:

cd task-manager
2. Install Backend Dependencies
cd backend
npm install
3. Start the Backend
npm run dev

The backend runs on:

http://localhost:5000
4. Install Frontend Dependencies

Open another terminal:

cd frontend
npm install
5. Start the Frontend
npm run dev

The frontend normally runs on:

http://localhost:5173
🔗 API Endpoints

The backend provides the following task endpoints:

Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create a new task
PUT	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
🧠 Key Learning Areas

Through this project, I learned and practiced:

React Context API
Global state management
Shared state between components
Avoiding prop drilling
Custom React hooks
CRUD operations
REST API integration
Asynchronous JavaScript
API error handling
Loading states
Skeleton loaders
Empty states
Search and filtering
Responsive UI design
SQLite database integration
Component-based architecture
State-driven UI updates
🎯 Project Objective

The main objective of this project was to understand how to manage application state effectively as a React application grows.

The project was refactored to use React Context API instead of relying heavily on prop drilling.

Additional user-experience improvements were implemented through:

Skeleton loaders
CRUD loading indicators
Empty states
Toast notifications
Search and filtering
Responsive design

These improvements make the application easier to maintain and provide a better experience for users.

🚀 Future Improvements

Possible future improvements include:

User authentication
User-specific task management
Task priorities
Due dates
Task categories
Pagination
Dark mode
Drag-and-drop task management
Cloud database
Production deployment
👩‍💻 Author

Hafsa Amin

BS Computer Science Student

⭐ Project Highlights

Built a full-stack Task Manager with React Context API for global state management, refactored components to eliminate prop drilling, and implemented skeleton loaders and empty states for a better user experience.