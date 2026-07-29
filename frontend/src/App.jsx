import { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ToastContainer, toast } from "react-toastify";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Load tasks when page opens
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      setLoading(true);

      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      if (isEditing) {
        await updateTask(currentId, {
          title,
          status,
        });
        toast.success("Task updated successfully!");

        setIsEditing(false);
        setCurrentId(null);
      } else {
        await createTask({
          title,
          status,
        });
        toast.success("Task added successfully!");
      }

      setTitle("");
      setStatus("Pending");

      await loadTasks();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(task) {
    setTitle(task.title);
    setStatus(task.status);

    setCurrentId(task.id);
    setIsEditing(true);
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      await deleteTask(id);
      toast.success("Task deleted successfully!");

      await loadTasks();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesStatus =
    filterStatus === "All" || task.status === filterStatus;

  return matchesSearch && matchesStatus;
});

   const totalTasks = tasks.length;

const pendingTasks = tasks.filter(
  (task) => task.status === "Pending"
).length;

const completedTasks = tasks.filter(
  (task) => task.status === "Completed"
).length;


  return (
  <div className="container">
    <h1>
      <FaTasks /> Task Manager
    </h1>

    <div className="stats-container">
  <div className="stat-card">
    <h3>Total Tasks</h3>
    <p>{totalTasks}</p>
  </div>

  <div className="stat-card pending">
    <h3>Pending</h3>
    <p>{pendingTasks}</p>
  </div>

  <div className="stat-card completed">
    <h3>Completed</h3>
    <p>{completedTasks}</p>
  </div>
</div>

    {/* Add Task Form */}
    <TaskForm
      title={title}
      status={status}
      setTitle={setTitle}
      setStatus={setStatus}
      handleSubmit={handleSubmit}
      isEditing={isEditing}
      loading={loading}
    />

    {/* Search Box */}
    <div className="card">
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    {/* Filter Dropdown */}
    <div className="card">
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">All Tasks</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    {/* Task List */}
    <TaskList
      tasks={filteredTasks}
      onEdit={handleEdit}
      onDelete={handleDelete}
      loading={loading}
    />

    <footer className="footer">
  <p>Built with React, Node.js, Express & SQLite</p>
  <p>© 2026 Hafsa Amin. All Rights Reserved.</p>
</footer>

    <ToastContainer
  position="top-right"
  autoClose={2500}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  theme="colored"
/>

  </div>
);
}

export default App;