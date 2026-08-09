import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/api";
import { toast } from "react-toastify";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Form state
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Loading states
  const [initialLoading, setInitialLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // Search/filter
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // =========================
  // LOAD TASKS
  // =========================

  async function loadTasks() {
    try {
      setInitialLoading(true);

      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setInitialLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  // =========================
  // ADD / UPDATE TASK
  // =========================

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter a task title.");
      return;
    }

    try {
      setActionLoading(true);

      if (isEditing) {
        await updateTask(currentId, {
          title: title.trim(),
          status,
        });

        toast.success("Task updated successfully!");
      } else {
        await createTask({
          title: title.trim(),
          status,
        });

        toast.success("Task added successfully!");
      }

      // Reset form
      setTitle("");
      setStatus("Pending");
      setIsEditing(false);
      setCurrentId(null);

      // Refresh tasks without showing skeleton
      const data = await getTasks();
      setTasks(data);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setActionLoading(false);
    }
  }

  // =========================
  // EDIT
  // =========================

  function handleEdit(task) {
    setTitle(task.title);
    setStatus(task.status);
    setCurrentId(task.id);
    setIsEditing(true);
  }

  // =========================
  // CANCEL EDIT
  // =========================

  function cancelEdit() {
    setTitle("");
    setStatus("Pending");
    setCurrentId(null);
    setIsEditing(false);
  }

  // =========================
  // DELETE
  // =========================

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      setActionLoading(true);

      await deleteTask(id);

      toast.success("Task deleted successfully!");

      // Refresh tasks without skeleton
      const data = await getTasks();
      setTasks(data);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setActionLoading(false);
    }
  }

  // =========================
  // FILTERED TASKS
  // =========================

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "All" ||
        task.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, searchTerm, filterStatus]);

  // =========================
  // STATISTICS
  // =========================

  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  // =========================
  // CONTEXT VALUE
  // =========================

  const value = {
    tasks,
    filteredTasks,

    title,
    setTitle,

    status,
    setStatus,

    isEditing,
    currentId,

    initialLoading,
    actionLoading,

    searchTerm,
    setSearchTerm,

    filterStatus,
    setFilterStatus,

    totalTasks,
    pendingTasks,
    completedTasks,

    handleSubmit,
    handleEdit,
    handleDelete,
    cancelEdit,

    loadTasks,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

// =========================
// CUSTOM HOOK
// =========================

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTasks must be used inside TaskProvider"
    );
  }

  return context;
}