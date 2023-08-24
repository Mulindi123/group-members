import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Joel from './Joel';

import logo from './logo.svg';
import './App.css';
import { Routes, Route,Link } from 'react-router-dom';
import Medrine from './Medrine';
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <button><Link to='/joel'>Joel</Link></button>
      </nav>
     <Routes>
      <Route path='/joel' element={<Joel/>}/>
     </Routes>
        <button><Link to= "/medrine">Medrine</Link></button>
     </nav>
     <Routes>
     <Route path="/medrine" element={<Medrine/>} />
      </Routes>
    </div>
  );
}

export default App;
