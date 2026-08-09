import { FaEdit, FaTrash } from "react-icons/fa";
import { useTasks } from "../context/TaskContext";
import TaskSkeleton from "./TaskSkeleton";

function TaskList() {
  const {
    filteredTasks,
    handleEdit,
    handleDelete,
    initialLoading,
  } = useTasks();

  return (
    <div className="task-list">

      {/* Initial Loading */}
      {initialLoading && <TaskSkeleton />}

      {/* Empty State */}
      {!initialLoading && filteredTasks.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">
            📋
          </div>

          <h3>No Tasks Found</h3>

          <p>
            Add a new task or change your search/filter.
          </p>
        </div>
      )}

      {/* Tasks */}
      {!initialLoading &&
        filteredTasks.length > 0 &&
        filteredTasks.map((task) => (
          <div className="task-item" key={task.id}>

            <div className="task-info">
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
                onClick={() => handleEdit(task)}
                disabled={initialLoading}
              >
                <FaEdit />
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
                disabled={initialLoading}
              >
                <FaTrash />
                Delete
              </button>

            </div>

          </div>
        ))}
    </div>
  );
}

export default TaskList;