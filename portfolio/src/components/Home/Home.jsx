import React, {Component} from 'react'
import './Home.css'

//Images
import logo from "../../images/Bumble-Logo.png"


export default class Home extends Component {
    render(){
        return (
            <div class="wrapper_home">

                <div id="home_info">
                    <span id="name">JAMES FERREIRA</span>
                    <span id="title">SOFTWARE ENGINEER</span>

                        <a href="/portfolio/#about" class="nav_option">
                            <span id ="effect">- </span>
                                ABOUT
                            <span id="effect"> -</span>
                        </a>


                        <a href="/portfolio/#projects" class="nav_option">
                            <span id ="effect">- </span>
                                PROJECTS
                            <span id="effect"> -</span>
                        </a>

                        <a href="/portfolio/#contact" class="nav_option">
                            <span id ="effect">- </span>
                                CONTACT
                            <span id="effect"> -</span>
                        </a>

                    <div id="home_logo">
                        <img src={logo}/>
                    </div>
                </div>

            </div>
    );
    }
}