import React, {Component} from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import project_descriptions from './project_descriptions'
import book from "../../images/pixel-book.png"

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

    render(){
        return (
            <div id="wrapper_projects">

                <ProjectCard {...project_descriptions[0]} />

                <ProjectCard {...project_descriptions[1]} />

                <ProjectCard {...project_descriptions[2]} />

            </div>
    )
    }
}