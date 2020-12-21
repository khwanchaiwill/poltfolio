
import React from 'react';
import HomePage from '../src/component/Home.js';
import NavBar from '../src/component/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';   
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <h1>Khwanchai Phaipha</h1>
          </div>
        <NavBar/>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
