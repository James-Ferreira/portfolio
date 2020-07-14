import React, {Component} from 'react'
import './Inventory.css'
import GridElement from '../GridElement'

import pixel_profile from "../../images/pixel-profile.png"
import book from "../../images/pixel-book.png"
import textbook from "../../images/pixel-textbook.png"
import glasses from "../../images/pixel-glasses.png"
import mug from "../../images/pixel-mug.png"
import record_player from "../../images/pixel-record.png"
import wasd from "../../images/pixel-wasd.png"
import award from "../../images/pixel-award.png"
import satchel from "../../images/pixel-satchel.png"
import skates from "../../images/pixel-skates.png"
import item_descriptions from "./descriptions"

export default class Inventory extends Component {

    constructor(props){
        super(props);

        const imagePaths = [
            { id: "inv_0", src: book, title: 'Currently Reading', description: 'A book' },
            { id: "inv_1", src: glasses, title: 'Currently Learning', description: 'A pair of glasses' },
            { id: "inv_2", src: record_player, title: 'Currently Listening', description: 'A vinyl player' },
            
            { id: "inv_3", src: satchel, title: 'Work History', description: 'a namebadge' },
            { id: "inv_4", src: mug, title: 'Languages', description: 'A mug' },
            { id: "inv_5", src: wasd, title: 'Software Skills', description: 'wasd keys' },

            { id: "inv_6", src: award, title: 'Awards', description: 'An award' },
            { id: "inv_7", src: skates, title: 'Hobbies', description: 'A soldering iron' },
            { id: "inv_8", src: textbook, title: 'Academic Interests', description: 'A textbook' },
          ];

        this.state = {
            activeItemId: "inv_0",
            prevItemId: "inv_0",
            images: imagePaths
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(itemID){
        const prevID = this.state.activeItemId;

        if(itemID != prevID){//unhighlight previous selection
            document.getElementById(prevID).style.backgroundColor
            = 'transparent'
        }

        this.setState({activeItemId: itemID});
        document.getElementById(itemID).style.backgroundColor
        = "var(--lavender-colour)";
    }

    createInventoryGrid(){
        let array = []
        
        // Outer loop to create parent
        let cell = 0;

        for (let i = 0; i < 3; i++) {
          //Inner loop to create children
          for (let j = 0; j < 3; j++) {
            array.push(
                    <GridElement
                        info={this.state.images[cell]}
                        onClick={this.onClick}
                    />)
                cell++;
          }
        }
        return array;
    }

    

    render(){

        return (

            <div id = "wrapper_inventory">
                <div class="profile_slot">
                    <img src={pixel_profile}/>

                    <div id ="profile_stats">
                        <ul>
                            <li><em>Name:</em> James Ferreira</li>
                            <li><em>University:</em> UQ</li>
                            <li><em>Degree:</em> Engineering</li>
                            <li><em>Major:</em> Software</li>
                            <li><em>GPA:</em> 6.22</li>
                            <li><em>Health:</em> ...</li>
                            <li><em>Sleep:</em> ...</li>
                            <li><em>Caffeine:</em> ...</li>
                        </ul>
                    </div>

                </div>
                
                <div class="grid_container">
                    {this.createInventoryGrid()}
                </div>

                <div id="item_description_pane">
                    <div id="item_desc_title">
                        {this.state.images[this.state.activeItemId.slice(-1)].title}
                    </div>

                    <div id="item_desc_container">
                        {item_descriptions[this.state.activeItemId.slice(-1)]}
                    </div>
                </div>

            </div>
    );
    }
}