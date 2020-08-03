import React, {Component} from 'react'
import './Inventory.css'
import GridElement from '../GridElement'
import item_descriptions from "./descriptions"

/* IMAGES */
import pixel_profile from "../../images/inventory/pixel-profile.png"
import book from "../../images/inventory/pixel-book.png"
import textbook from "../../images/inventory/pixel-textbook.png"
import glasses from "../../images/inventory/pixel-glasses.png"
import mug from "../../images/inventory/pixel-mug.png"
import record_player from "../../images/inventory/pixel-record.png"
import wasd from "../../images/inventory/pixel-wasd.png"
import award from "../../images/inventory/pixel-award.png"
import satchel from "../../images/inventory/pixel-satchel.png"
import skates from "../../images/inventory/pixel-skates.png"
import name_tag from "../../images/inventory/name-tag.png"
import gpa_tag from "../../images/inventory/gpa-tag.png"
import uq_tag from "../../images/inventory/uq-tag.png"
import prev_tag from "../../images/inventory/prev-tag.png"
import next_tag from "../../images/inventory/next-tag.png"

export default class Inventory extends Component {

    constructor(props){
        super(props);

        const imagePaths = [
            { id: 0, src: book, title: 'Reading', description: 'A book' },
            { id: 1, src: glasses, title: 'Learning', description: 'A pair of glasses' },
            { id: 2, src: record_player, title: 'Listening', description: 'A vinyl player' },
            
            { id: 3, src: satchel, title: 'Work History', description: 'a namebadge' },
            { id: 4, src: mug, title: 'Languages', description: 'A mug' },
            { id: 5, src: wasd, title: 'Software Skills', description: 'wasd keys' },

            { id: 6, src: award, title: 'Awards', description: 'An award' },
            { id: 7, src: skates, title: 'Hobbies', description: 'A soldering iron' },
            { id: 8, src: textbook, title: 'Academic Interests', description: 'A textbook' },
          ];

        this.state = {
            activeItemId: 0,
            prevItemId: 0,
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

        var newID = 0;
        if (itemID == -1){
            newID = 8;
        } else if(itemID == 9){
            newID = 0;
        } else {
            newID = itemID;
        }

        document.getElementById(newID).style.backgroundColor
        = '#cebba1';
        
        this.setState({activeItemId: newID});
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
                <div class="inventory_pane" id="profile_avatar">
                    <img draggable="false" src={pixel_profile}/>
                    <div id ="profile_tags">
                        <img draggable="false" src={name_tag}/>
                        <img draggable="false" src={gpa_tag}/>
                        <img draggable="false" src={uq_tag}/>
                    </div>
                </div>
                
                <div class="inventory_pane" id="grid_pane">
                    {this.createInventoryGrid()}
                </div>

                <div class="inventory_pane" id="item_description_pane">
                    <div id="item_desc_title">
                        <span>{this.state.images[this.state.activeItemId].title}</span>

                    </div>

                    <div id="item_next_button">
                        <img onClick={() => this.onClick(this.state.activeItemId - 1)} id="prev" src={prev_tag}/>
                        <img onClick={() => this.onClick(this.state.activeItemId + 1)} id="prev" src={next_tag}/>
                    </div>

                    <div id="item_desc_container">
                        {item_descriptions[this.state.activeItemId]}
                    </div>
                </div>

            </div>
    );
    }
}