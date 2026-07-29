import { FaEdit, FaTrash } from "react-icons/fa";
function TaskList({ tasks, onEdit, onDelete, loading }) {
  return (
    <div className="card">
      <h2>Task List</h2>

      {loading && <div className="loading">
  <h3>Loading Tasks...</h3>
</div>}

      {!loading && tasks.length === 0 && (
        <div className="empty">
  <h3>📋 No Tasks Found</h3>
  <p>Add your first task to get started.</p>
</div>
      )}

      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          <div className="task-header">
            <h3>{task.title}</h3>

            <span
              className={
                task.status === "Completed"
                  ? "badge completed-badge"
                  : "badge pending-badge"
              }
            >
              {task.status}
            </span>
          </div>

          <div className="button-group">
            <button
  className="edit-btn"
  onClick={() => onEdit(task)}
>
  <FaEdit /> Edit
</button>
            

            <button
  className="delete-btn"
  onClick={() => onDelete(task.id)}
>
  <FaTrash /> Delete
</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;