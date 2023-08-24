import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Joel from './Joel';


function App() {
  return (
    <div className="App">
      <nav>
        <button><Link to='/joel'>Joel</Link></button>
      </nav>
     <Routes>
      <Route path='/joel' element={<Joel/>}/>
     </Routes>
    </div>
  );
}

export default App;
