import React, { Component } from 'react'
import './NavigationPane.css'
import logo from "../../images/Bumble-Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class NavigationPane extends Component {
    render(){
        return(

            <div id="wrapper_nav">

                    <div id ="nav_logo">
                        <a href=""><img src= {logo}/></a>
                    </div>

                    <div id ="nav_text_links">
                        <a href="#about">ABOUT</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#resume">RESUME</a>
                    </div>
            </div>

        );
    }
}