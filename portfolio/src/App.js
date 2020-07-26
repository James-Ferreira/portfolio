import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationPane from './components/NavigationPane/NavigationPane'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import pixel_about from "./images/pixel-about.png"
import pixel_projects from "./images/pixel-projects.png"
import pixel_contact from "./images/pixel-contact.png"
function App() {
  return (
    <div className="App">
      <div id='app-main-wrapper'>
          <div class="page" id="app-home-wrapper"><Home /></div>

          <div id='app-nav-wrapper' class="dither"><NavigationPane /></div>

          <img class="wrapper_left_branch" src={pixel_about}/>
          <div class="page" id="app-about-wrapper" id="about"><About /></div>

          <img class="wrapper_right_branch" src={pixel_projects}/>
          <div class="page" id="app-projects-wrapper" id="projects"><Projects /></div>  

          <img class="wrapper_left_branch" src={pixel_contact}/>
          <div class="page" id="app-projects-wrapper" id="contact"><Contact /></div>  

      </div>
    </div>    

  );
}

export default App;
