import React, {Component} from 'react'
import './Projects.css'
import GridElement from '../GridElement'


import project_descriptions from './project_descriptions'


export default class Projects extends Component {

    constructor(props){
        super(props);
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


    createProjectGrid(){
        let array = []
        
        // Outer loop to create parent
        let cell = 0;
        for (let i = 0; i < 3; i++) { //cols
          //Inner loop to create children
          for (let j = 0; j < 2; j++) { //rows
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
            <div id="wrapper_projects">

                <div class="projectCard">
                    {project_descriptions[0]}
                </div>

                <div class="projectCard">
                    {project_descriptions[1]}
                </div>

                <div class="projectCard">
                    {project_descriptions[2]}
                </div>
            </div>
    )
    }
}