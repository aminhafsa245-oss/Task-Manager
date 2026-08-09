function TaskSkeleton() {
  return (
    <div className="task-skeleton-container">
      {[1, 2, 3].map((item) => (
        <div className="task-skeleton" key={item}>
          <div className="skeleton-title"></div>

          <div className="skeleton-status"></div>

          <div className="skeleton-buttons">
            <div className="skeleton-button"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskSkeleton;