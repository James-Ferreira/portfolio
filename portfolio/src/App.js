import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationPane from './components/NavigationPane/NavigationPane'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import pixel_projects from "./images/pixel-projects.png"
function App() {
  return (
    <div className="App">
      <div id='app-main-wrapper'>
          <div class="page" id="app-home-wrapper"><Home /></div>
          <div id='app-nav-wrapper' class="dither"><NavigationPane /></div>
          <div class="page" id="app-about-wrapper" id="about"><About /></div>
          <div class ="wrapper_right_branch">
                    <img class="branch" src={pixel_projects}/>
          </div>
          <div class="page" id="app-projects-wrapper" id="projects"><Projects /></div>  

      </div>
    </div>    

  );
}

export default App;
