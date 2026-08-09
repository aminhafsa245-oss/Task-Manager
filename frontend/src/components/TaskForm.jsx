import { FaPlusCircle, FaEdit } from "react-icons/fa";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const {
    title,
    setTitle,
    status,
    setStatus,
    handleSubmit,
    isEditing,
    actionLoading,
    cancelEdit,
  } = useTasks();

  return (
    <div className="task-form">

      {/* Form Header */}
      <div className="form-header">
        <h2>
          {isEditing ? "Edit Task" : "Add Task"}
        </h2>

        <p>
          {isEditing
            ? "Update the task details below."
            : "Create a new task to get started."}
        </p>
      </div>

      {/* Task Form */}
      <form onSubmit={handleSubmit}>

        {/* Task Title */}
        <label htmlFor="task-title">
          Task Title
        </label>

        <input
          id="task-title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={actionLoading}
        />

        {/* Task Status */}
        <label htmlFor="task-status">
          Status
        </label>

        <select
          id="task-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          disabled={actionLoading}
        >
          <option value="Pending">
            Pending
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-btn"
          disabled={actionLoading}
        >
          {actionLoading ? (
            "Saving..."
          ) : isEditing ? (
            <>
              <FaEdit />
              Update Task
            </>
          ) : (
            <>
              <FaPlusCircle />
              Add Task
            </>
          )}
        </button>

        {/* Cancel Edit */}
        {isEditing && (
          <button
            type="button"
            className="cancel-btn"
            onClick={cancelEdit}
            disabled={actionLoading}
          >
            Cancel
          </button>
        )}

      </form>
    </div>
  );
}

export default TaskForm;