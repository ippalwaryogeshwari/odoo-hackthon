import './App.css';
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="page-content">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your subscription overview.</p>
        </div>

      </div>

    </div>
  );
}

export default App;