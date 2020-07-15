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

                <div class="contactArea">
                    <a class="navIcon" target="_blank"  
                    href = "https://github.com/James-Ferreira">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </a>

                    <a class="navIcon" target="_blank" 
                    href = "https://www.linkedin.com/in/james-ferreira-a14505164/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>

                    <a class="navIcon" target="_blank" 
                    href = "https://www.linkedin.com/in/james-ferreira-a14505164/">
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </a>
                </div>
            </div>
    )
    }
}