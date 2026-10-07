import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  filter,
  setFilter
}) {


  const filteredTasks = tasks.filter((task) => {

    if (filter === "active") {
      return !task.completed;
    }
  
    if (filter === "completed") {
      return task.completed;
    }
  
    return true;
  });

  return (
    <section className="tasks">

      <h2>Tasks</h2>

      <div className="filters">

      <button onClick={() => setFilter("all")}>
  All
</button>

<button onClick={() => setFilter("active")}>
  Active
</button>

<button onClick={() => setFilter("completed")}>
  Completed
</button>

      </div>

      {filteredTasks.map((task) => (
                <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}

    </section>
  );
}

export default TaskList;