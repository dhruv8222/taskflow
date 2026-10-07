function TaskCard({ task, deleteTask, toggleTask }) {
    return (
      <div
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
    >

      <h3>{task.title}</h3>

      <p>{task.priority}</p>

      <button onClick={() => deleteTask(task.id)}>
  Delete
</button>

<button onClick={() => toggleTask(task.id)}>
  {task.completed ? "Undo" : "Complete"}
</button>

    </div>
  );
}

export default TaskCard;