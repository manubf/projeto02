import React, {Component} from 'react';
//import inputCadastro from'../../components/inputCadastro';
import './cadastro.css'

class Cadastro extends React.Component {

    render(){
        return (
            <div class="cadastro">
                <p>Cadastro de processo</p>
                <label for="assunto">Assunto</label>
                <input type="text" id="assunto" name="Name" />
                <label for="interessado">Interessados:</label>
                <input type="text" id="interessado" name="Name" />
                <label for="novo_interessado">Novo interessado:</label>
                <input type="text" id="novo_interessado" name="Name" />
                <label for="descricao">Descrição</label>
                <input type="text" id="descricao" name="Name" />
            </div>
        )
    }
}

export default Cadastro;

