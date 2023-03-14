import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { projectData } from './components/data';
import Section1 from './components/Section1';
import Contactme from "./components/Contactme"

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/Contactme' element={<Contactme/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      </div>
      
    </>
  )
}

export default App;
