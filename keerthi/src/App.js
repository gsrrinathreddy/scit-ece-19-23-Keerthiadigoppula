
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Qualification from './pages/Qualification';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Aboutme from './pages/Aboutme';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path ="/Aboutme" element={<Aboutme/>}/>
     <Route path ="/Hobbies" element={<Hobbies/>}/>
     <Route path ="/Qualification" element={<Qualification/>}/>
     <Route path ="/Skills" element={<Skills/>}/>
     <Route path="/Experience" element={<Experience/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
