import './App.css';
import Humphrey from './Humphrey';
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <nav>
      <button><Link to="/humphrey">Humphrey</Link></button>
    </nav>
    <Routes>
      <Route path="/humphrey" element={<Humphrey/>}/>
    </Routes>
    </div>
  );
}

export default App;
