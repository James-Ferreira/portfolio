import React, { Component } from 'react'
import './NavigationPane.css'
import logo from "../../images/Bumble-Logo.png"

export default class NavigationPane extends Component {
    render(){
        return(

            <div id="wrapper_nav">

                    <div id ="nav_text_links">
                        <a href="">HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#contact">CONTACT</a>
                    </div>
            </div>

        );
    }
}