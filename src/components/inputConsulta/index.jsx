import React from 'react';
import { Link } from 'react-router-dom';
import './input.css';

class InputConsulta extends React.Component {   
    state = { busca: "" };
    
    handleChange = (field, text) => {
        this.setState({[field]: text});
    }

    render(){
        return (
            <div id="txtBusca">
                <input type="text" placeholder="Buscar..." onChange={e=> this.handleChange("busca", e.target.value)}/>
                <Link to={{pathname: "/listagem", search: `?busca=${this.state.busca}` }}>
                    pesquisar
                </Link>
            </div>
        )
    }
}

export default InputConsulta;
