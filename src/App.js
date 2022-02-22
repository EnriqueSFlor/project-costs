import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';

function App() {
  return (
   <Router>
   
    <Navbar/>

     <Container customClass="min-height">
     <Routes>
       <Route exact path="/" element={<Home />}/>
       <Route exact path="/projects" element={ <Projects />}/>
       <Route exact path="/company" element={ <Company />}/>
       <Route exact path="/contact" element={<Contact />}/>
       <Route exact path="/newproject" element={<NewProject />}/>
       <Route exact path="/project/:id" element={<Project/>}/>
     </Routes>
     </Container>
      <Footer/>    
   </Router>
  );
}

export default App;
