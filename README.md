# 📝 Task Manager (Full Stack CRUD Application)

A full-stack Task Manager application built with **React**, **Node.js**, **Express**, and **SQLite**. This project demonstrates complete CRUD (Create, Read, Update, Delete) functionality by connecting a custom backend API with a React frontend.

---

## 🚀 Features

- ✅ Create new tasks
- 📋 View all tasks
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 🔄 Real-time UI updates
- ⏳ Loading states
- ⚠️ Error handling
- 🔍 Filter tasks by status (All, Pending, Completed)
- 🎨 Responsive and modern UI

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- CSS
- React Icons

### Backend
- Node.js
- Express.js
- SQLite
- CORS

---

## 📁 Project Structure

```
task-manager/
│
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── tasks.db
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Navigate to the project

```bash
cd task-manager
```

---

## ▶️ Run the Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## ▶️ Run the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

---

## 💡 What I Learned

- Building RESTful APIs with Express
- Using SQLite as a local database
- Connecting React with a custom backend API
- Managing application state with React Hooks
- Handling loading and error states
- Implementing full CRUD operations
- Organizing a full-stack project using a monorepo


---

## 👩‍💻 Author

**Hafsa Amin**
