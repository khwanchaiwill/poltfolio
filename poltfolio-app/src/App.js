
import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from '../src/component/Home.js';
import NavBar from '../src/component/Navbar.js';
import Project from '../src/component/Project.js';
import Skills from '../src/component/Skill.js';
import Footer from '../src/component/Footer.js';
import Contact from '../src/component/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';   
import "video-react/dist/video-react.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">   
        <NavBar/>   
        <div className="name"> 
          <h1>Khwanchai Phaipha</h1>
        </div> 
      </header>
     
      <HomePage />
      <div id="skill">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      
      
    </div>
  );
}

export default App;
