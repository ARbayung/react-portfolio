import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <div class="bg">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;
