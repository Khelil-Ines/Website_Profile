import './App.css';
import projects from './projects.json';
import Profile from './Components/Profile'
import Projects from './Components/Projects';
import { Route , Routes, Link } from 'react-router-dom'
import ProjectDetail from './Components/ProjectDetail';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';



const  App= () => {
  
  const handleName =(myName) => alert('Hello ' + myName);
  const fullName='******'
  const bio='Welcome to my profile, '
  const profession ='i am a BI student!'
  
  return (
  <div>
  <NavBar fullName={fullName} />
   <Profile  bio={bio} profession={profession} handleName={handleName}> 
     <img src="/images/img4.jpg" alt="in" className='display' /> 
    </Profile>
  <Routes>
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/projects' element={<Projects projects={projects} />} />
    <Route path='/projects/:id' element={<ProjectDetail />} />
  </Routes>

  </div>
  
  );
}

export default App;
