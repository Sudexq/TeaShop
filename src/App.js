import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import { Products } from './components/Products';
import { WrongPath } from './components/WrongPath';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<WrongPath/>}/>
      </Routes>
    </div>
  );
}

export default App;
