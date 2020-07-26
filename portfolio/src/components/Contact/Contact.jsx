import React, {Component} from 'react'
import './Contact.css'
import LinkedIn from "../../images/LinkedIn-Logo.png"
import GitHub from "../../images/GitHub-Logo.png"
import pixel_contact from "../../images/pixel-contact.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Contact extends Component {
    render(){
        return (
            <div id="wrapper_contact">
                <a class="navIcon" target="_blank"  
                href = "https://github.com/James-Ferreira">
                    <span>GitHub</span>
                </a>

                <a class="navIcon" target="_blank" 
                href = "https://www.linkedin.com/in/james-ferreira-a14505164/">
                    <span>LinkedIn</span>
                </a>

                <a class="navIcon" target="_blank" 
                href = "https://www.linkedin.com/in/james-ferreira-a14505164/">
                    <span>Email</span>
                </a>

            </div>
    )
    }
}