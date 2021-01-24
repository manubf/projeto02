import React from 'react';
import './button.css';


class MyButton extends React.Component {
    render(){
        return (
            <button id = "buttonG" onClick={this.props.onClick}>{this.props.legenda}</button>
        )
    }
}

export default MyButton;