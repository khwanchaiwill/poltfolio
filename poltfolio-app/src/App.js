
import React from 'react';
import HomePage from '../src/component/Home.js';
import NavBar from '../src/component/Navbar.js';
import Project from '../src/component/Project.js';
import Skills from '../src/component/Skill.js';
import Footer from '../src/component/Footer.js';
import Contact from '../src/component/Contact.js';
// import BlogPost from './component/Blog.js';
import 'bootstrap/dist/css/bootstrap.min.css';   
import "video-react/dist/video-react.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">   
        <NavBar/>   
        <div className="name"> 
          <h1>Khwanchai Phaipha</h1>
        </div> 
      </div>
      <div id="home">
        <HomePage />
      </div>
      
      <div id="skill">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
