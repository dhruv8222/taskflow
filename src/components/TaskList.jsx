import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, toggleTask }) {
    return (
    <section className="tasks">

      <h2>Tasks</h2>

      {tasks.map((task) => (
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