function Stats({ tasks }) {

  const total = tasks.length;

  const completed = tasks.filter(
    task => task.completed
  ).length;

  const active = tasks.filter(
    task => !task.completed
  ).length;

  return (
    <div className="stats">

      <div className="stat-card">
        <h3>Total</h3>
        <p>{total}</p>
      </div>

      <div className="stat-card">
        <h3>Active</h3>
        <p>{active}</p>
      </div>

      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

    </div>
  );
}

export default Stats;