import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <section className="tasks">

      <h2>Tasks</h2>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}

    </section>
  );
}

export default TaskList;