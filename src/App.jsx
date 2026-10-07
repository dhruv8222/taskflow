import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main-content">

        <Header />

      </main>

    </div>
  );
}

export default App;