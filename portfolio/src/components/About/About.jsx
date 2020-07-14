import React, {Component} from 'react'
import './About.css'
import Inventory from './Inventory'
import pixel_about from "../../images/pixel-about.png"

export default class About extends Component {
    render(){
        return (
            <div id="wrapper_about">
                <div class ="wrapper_left_branch">
                    <img class="branch" src={pixel_about}/>
                </div>

                <div id="wrapper_inventory_area">
                <Inventory />   
                </div>
            </div>
    )
    }
}