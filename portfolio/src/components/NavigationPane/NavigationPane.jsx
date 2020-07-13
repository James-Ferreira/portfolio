import React, { Component } from 'react'
import './NavigationPane.css'
import logo from "../../images/Bumble-Logo.png"
import LinkedIn from "../../images/LinkedIn-Logo.png"
import GitHub from "../../images/GitHub-Logo.png"
import Dither from "../../images/dither_tile.png"


export default class NavigationPane extends Component {
    render(){
        return(

            <div id="wrapper_nav">

                    <div id ="nav_logo">
                        <a href=""><img src= {logo}/></a>
                    </div>

                    <div id = "nav_image_links">
                        <a target="_blank"  
                        href = "https://github.com/James-Ferreira">
                                        <img src={GitHub}/>
                        </a>

                        <a target="_blank" 
                        href = "https://www.linkedin.com/in/james-ferreira-a14505164/">
                            <img src={LinkedIn}/>
                        </a>
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