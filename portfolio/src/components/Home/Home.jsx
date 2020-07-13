import React, {Component} from 'react'
import './Home.css'

//Images
import profile from "../../images/profile.jpg"
import branch from "../../images/pixel-branch.png"
import pixel_name from "../../images/pixel-name.png"
import logo from "../../images/Bumble-Logo.png"
import LinkedIn from "../../images/LinkedIn-Logo.png"
import GitHub from "../../images/GitHub-Logo.png"

export default class Home extends Component {
    render(){
        return (
            <div class="wrapper_home">

                <div id="home_info">
                    <span id="name">JAMES FERREIRA</span>
                    <span id="title">SOFTWARE ENGINEER</span>

                        <a href="/#about" class="nav_option">
                            <span id ="effect">- </span>
                                ABOUT
                            <span id="effect"> -</span>
                        </a>


                        <a class="nav_option">
                            <span id ="effect">- </span>
                                PROJECTS
                            <span id="effect"> -</span>
                        </a>

                        <a class="nav_option">
                            <span id ="effect">- </span>
                                CONTACT
                            <span id="effect"> -</span>
                        </a>

                    <div id="home_logo">
                        <div><img src={logo}/></div>
                    </div>
                </div>

            </div>
    );
    }
}