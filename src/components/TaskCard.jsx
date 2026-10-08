import { useState } from "react";

function TaskCard({ task, deleteTask, toggleTask,
  updateTask }) {


  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState(task.title);
const [editPriority, setEditPriority] = useState(task.priority);

const handleSave = () => {

  if (editTitle.trim() === "") {
    return;
  }

  updateTask(
    task.id,
    editTitle,
    editPriority
  );

  setIsEditing(false);
};

const handleCancel = () => {
  setEditTitle(task.title);
  setEditPriority(task.priority);
  setIsEditing(false);
};

    return (
      <div
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
    >

{isEditing ? (
  <div className="edit-form">

  <input
    type="text"
    value={editTitle}
    onChange={(e) => setEditTitle(e.target.value)}
  />

  <select
    value={editPriority}
    onChange={(e) => setEditPriority(e.target.value)}
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>

  <button onClick={handleSave}>
    Save
  </button>

  <button onClick={handleCancel}>
    Cancel
  </button>

</div>
) : (<>

  <h3>{task.title}</h3>

  <p>{task.priority}</p>

  <button
    onClick={() => setIsEditing(true)}
  >
    Edit
  </button>

  <button
    onClick={() => toggleTask(task.id)}
  >
    {task.completed ? "Undo" : "Complete"}
  </button>

  <button
    onClick={() => deleteTask(task.id)}
  >
    Delete
  </button>

</>
)}

    </div>
  );
}

export default TaskCard;