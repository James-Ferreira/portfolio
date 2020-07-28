import React, {Component} from 'react'
import './Contact.css'
import name from "../../images/card/pixel-name.png"
import GitHub from "../../images/card/git.png"
import Email from "../../images/card/email.png"
import LinkedIn from "../../images/card/linked.png"
import addr from "../../images/card/pixel-addr.png"


export default class Contact extends Component {
    render(){
        return (
            <div id="wrapper_contact">

                <div id ="card_title">
                    <img src={name}/>
                </div>

                <div class="link_icon" id ="card_email">
                    <img src={Email}/>
                </div>

                <div class="link_icon" id ="card_github">
                    <a href="https://github.com/James-Ferreira" target="_blank">
                        <img src={GitHub}/>
                    </a>
                </div>
                
                <div class="link_icon" id ="card_linked">
                    <a 
                    href ="https://www.linkedin.com/in/james-ferreira-a14505164/"
                    target="_blank">
                       <img src={LinkedIn}/> 
                    </a>
                </div>

                <div class="link_icon" id ="card_addr">
                    <img src={addr}/>
                </div>
            </div>
    )
    }
}