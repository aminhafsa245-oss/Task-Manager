import { FaTasks } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTasks } from "./context/TaskContext";

function App() {
  const {
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    totalTasks,
    pendingTasks,
    completedTasks,
  } = useTasks();

  return (
    <div className="app-container">

      {/* ================= HEADER ================= */}
      <header className="app-header">
        <div>
          <h1>
            <FaTasks />
            Task Manager
          </h1>

          <p>Manage your tasks efficiently</p>
        </div>

        <span className="year">2026</span>
      </header>


      {/* ================= STATISTICS ================= */}
      <section className="stats-grid">

        <div className="stat-card">
          <span className="stat-label">Total Tasks</span>
          <strong>{totalTasks}</strong>
        </div>

        <div className="stat-card pending-stat">
          <span className="stat-label">Pending Tasks</span>
          <strong>{pendingTasks}</strong>
        </div>

        <div className="stat-card completed-stat">
          <span className="stat-label">Completed Tasks</span>
          <strong>{completedTasks}</strong>
        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="dashboard-grid">

        {/* LEFT SIDE - FORM */}
        <section className="form-section">
          <TaskForm />
        </section>


        {/* RIGHT SIDE - TASKS */}
        <section className="tasks-section">

          <div className="tasks-header">
            <div>
              <h2>Tasks</h2>
              <p>View and manage your tasks</p>
            </div>
          </div>


          {/* SEARCH + FILTER */}
          <div className="search-filter">

            <input
              type="text"
              placeholder="🔍 Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Tasks</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

          </div>


          {/* TASK LIST */}
          <TaskList />

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © 2026 Task Manager
      </footer>


      {/* ================= TOAST ================= */}
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