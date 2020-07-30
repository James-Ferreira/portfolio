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

                {project_descriptions.map((item,i) => 
                    <ProjectCard {...project_descriptions[i]} />
                )}

            </div>
    )
    }
}