
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Joel from './Joel';
import Lehane from './Lehane';
import Medrine from './Medrine';
import Humphrey from './Humphrey';
import Mucsin from './Mucsin';


function App() {
  return (
    <div className="App">
      <nav>
        <button><Link to='/joel'>Joel</Link></button>
        <button><Link to='/lehane'>Lehane</Link> </button>
        <button><Link to= "/medrine">Medrine</Link></button>
        <button><Link to= "/humphrey">Humphrey</Link></button>
        <button><Link to= "/mucsin">Mucsin</Link></button>
      </nav>
     <Routes>
      <Route path="/joel" element={<Joel/>}/>
      <Route path="/medrine" element={<Medrine/>} />
      <Route path='/lehane' element={<Lehane/>} />
      <Route path='/humphrey' element={<Humphrey/>} />
      <Route path='/mucsin' element={<Mucsin/>} />
     </Routes>
    </div>
  );
}

export default App;
