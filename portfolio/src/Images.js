import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationPane from './components/NavigationPane/NavigationPane'
import Home from './components/Home/Home'
import About from './components/About/About'

import branch from "./images/pixel-branch.png"
import pixel_name from "./images/pixel-name.png"
import pixel_about from "./images/pixel-about.png"
import pixel_projects from "./images/pixel-projects.png"

function App() {
  return (
    <div className="App">
      <div id='wrapper'>

        <div id='top-navigation'>
          <NavigationPane fixed="top"/>
        </div>

        <div id='main'>

          <img class="branch" src={pixel_name}/>

          <section id="home"><Home /></section>

          <div class="branch-wrapper">
              <img class="branch" src={pixel_about}/>
          </div>
          <section id="about"><About /></section> 

        </div>
      </div>    
    </div>
  );
}

export default App;
