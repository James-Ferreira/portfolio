import React, {Component} from 'react'

export default class ProjectCard extends Component {

    constructor(props){
        super(props);
    }

    createList(array){
        var list = document.createElement('ul');

        array.forEach(function(item){
            let li = document.createElement('li');
            list.appendChild(li);
            li.innerHTML += item;
        })

        document.getElementById("test").appendChild(list);
    }
      render(){
        return (

            <div class="projectCard">
                <div class="titleArea">
                    <h3>{this.props.title}</h3>
                    <img src={this.props.image} />
                    <h4>{this.props.date}</h4>
                </div>

                <div class="bodyArea">
                    <div class="kwArea">
                        <ul>
                            {this.props.keywords.map((item,i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                    <div class="descArea">
                        <p>{this.props.desc}</p>
                    </div>

                    <div class="actionArea">
                        GIT
                    </div>
                </div>
                
            </div>
        );
    }
}