import React from 'react';
import './input.css';


class InputCadastro extends React.Component {

    render(){
        return (
                <React.Fragment>
                    <label for={this.props.name}>{this.props.content}</label>
                    <input className="input" type="text" name={this.props.name} value={this.props.value} onChange={this.props.onchange} />
                </React.Fragment>
             
            )
    }
}

export default InputCadastro;