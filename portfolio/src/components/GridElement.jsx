import React, {Component} from 'react'

export default class GridElement extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.onClick(this.props.info.id)
    }

      render(){
        return (

            <div class="grid_item" id={this.props.info.id}
                onClick={this.handleClick}>
                <img
                    id={this.props.info.id}
                    src={this.props.info.src}
                    title={this.props.info.title}
                    description={this.props.info.description}
                />
            </div>
        );
    }
}