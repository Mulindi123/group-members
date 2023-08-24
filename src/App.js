import logo from "./logo.svg";
import "./App.css";
import Mucsin from "./Mucsin";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <button>
          <Link to="/mucsin">Mucsin</Link>
        </button>
      </nav>
      <Routes>
        <Route path="/mucsin" element={<Mucsin />} />
      </Routes>
    </div>
  );
}

export default App;
