import { FaPlusCircle, FaEdit } from "react-icons/fa";
function TaskForm({
  title,
  status,
  setTitle,
  setStatus,
  handleSubmit,
  isEditing,
  loading,
}) {
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>{isEditing ? "Edit Task" : "Add Task"}</h2>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

         <button
  type="submit"
  className="submit-btn"
  disabled={loading}
>
  {loading ? (
    "Saving..."
  ) : isEditing ? (
    <>
      <FaEdit /> Update Task
    </>
  ) : (
    <>
      <FaPlusCircle /> Add Task
    </>
  )}
</button>
      </form>
    </div>
  );
}

export default TaskForm;