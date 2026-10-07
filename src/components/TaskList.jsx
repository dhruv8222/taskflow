import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  filter,
  setFilter,search, setSearch
}) {


  const filteredTasks = tasks.filter((task) => {

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
  
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);
  
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="tasks">

      <h2>Tasks</h2>


      <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

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