import React, {Component} from 'react'
import './Contact.css'
import name from "../../images/card/pixel-name.png"
import GitHub from "../../images/card/pixel-git.png"
import Email from "../../images/card/pixel-email.png"
import LinkedIn from "../../images/card/pixel-in.png"
import addr from "../../images/card/pixel-addr.png"
import scribble from "../../images/card/pixel-scribble.png"

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
                    <img src={GitHub}/>
                </div>
                
                <div class="link_icon" id ="card_linked">
                    <img src={LinkedIn}/>
                </div>

                <div class="link_icon" id ="card_addr">
                    <img src={addr}/>
                </div>
            </div>
    )
    }
}