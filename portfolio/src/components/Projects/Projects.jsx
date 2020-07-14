import React, {Component} from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import project_descriptions from './project_descriptions'


export default class Projects extends Component {

    constructor(props){
        super(props);
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