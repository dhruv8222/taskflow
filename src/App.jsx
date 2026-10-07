import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";
import { useState } from "react";



function App() {


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

  console.log(tasks);

  return (
    <div className="app">

      <Sidebar />

      <main className="main-content">

        <Header />
        <Stats />
        <TaskList tasks = {tasks}/>

      </main>

    </div>
  );
}

export default App;