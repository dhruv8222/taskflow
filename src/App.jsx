import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useState } from "react";



function App() {

  const addTask = (title, priority) => {

    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      completed: false
    };
  
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      priority: "high",
      completed: false
    },
    {
      id: 2,
      title: "Build portfolio",
      priority: "medium",
      completed: false
    },
    {
      id: 3,
      title: "Practice DSA",
      priority: "low",
      completed: true
    }
  ]);

  const [filter, setFilter] = useState("all");

  const [search, setSearch] = useState("");

  console.log(tasks);

  return (
    <div className="app">

      <Sidebar />

      <main className="main-content">

        <Header />
        <AddTask addTask={addTask} />
        <Stats tasks={tasks} />
        <TaskList
  tasks={tasks}
  deleteTask={deleteTask}
  toggleTask={toggleTask}
  filter={filter}
  setFilter={setFilter}
  search={search}
  setSearch={setSearch}
/>

      </main>

    </div>
  );
}

export default App;