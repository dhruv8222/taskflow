import { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("medium");
  
    const handleSubmit = (e) => {

      e.preventDefault();

      if (title.trim() === "") {
        return;
      }
    
      addTask(title, priority);
    
      setTitle("");
      setPriority("medium");
    };

  return (
    <form
  className="add-task"
  onSubmit={handleSubmit}
>

      <h2>Add New Task</h2>

      <input
  type="text"
  placeholder="Enter task title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>


<select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <div className="add-task-button">
      <button type="submit">
  Add Task
</button>
</div>

    </form>
  );
}

export default AddTask;