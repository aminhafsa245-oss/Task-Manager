# Task Manager Backend

A RESTful backend API for the Task Manager application built with **Node.js**, **Express.js**, and **SQLite**. It provides complete CRUD operations for managing tasks.

---

## 🚀 Features

- Create a new task
- Get all tasks
- Update a task
- Delete a task
- SQLite database
- RESTful API
- CORS enabled

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- SQLite
- CORS

---

## 📂 Project Structure

```
backend/
│
├── database.js
├── server.js
├── tasks.db
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/aminhafsa245-oss/task-manager-backend.git
```

Go to the project folder:

```bash
cd task-manager-backend
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

---

## 📌 Technologies Used

- Express.js
- SQLite
- Node.js
- REST API

---

## 👩‍💻 Author

**Hafsa Amin**