import React, { Component } from 'react';
import './listagem1.css';
import ProcessoService from '../../services/ProcessoService';
import InputConsulta from '../../components/inputConsulta';
import MyButton from '../../components/button';
import { Link } from 'react-router-dom';


class Listagem extends Component{
    //const {id, numero, assunto, interessado, descricao,} = processo;

    constructor(props) {
        super(props);
        this.state = {processos : []};  
        //this.props.history.location.search = {processos: []};    
        // this.editarProcesso = this.editarProcesso.bind(this);
        // this.excluirProcesso = this.excluirProcesso.bind(this);
        this.carregarDetalhes = this.carregarDetalhes.bind(this);
    }
    
    componentDidMount() {
        this.carregarProcessos();
    }

    async carregarProcessos() {
        const processos = await ProcessoService.buscarProcessos();
        this.setState({processos});
    }

    carregarDetalhes(processo){
        console.log("clicou!",processo )
        this.props.history.push("/detalhes")
        //recebo e pego o valor do id para passar para um novo get pra renderizar detalhes?
        //passo o booleano para o true para confirmar q tá clicado
    }
    


    render(){
        if (!this.state.processos || this.state.processos.length === 0) {
            return <span>Não existem processos cadastrados.</span>
        }
        
        return(
            <>
                <InputConsulta busca={this.props.history.location.search.replace('?busca=', '')}/>
                <Link to="/cadastro"><MyButton legenda="NOVO"/></Link>
                {this.state.processos && this.state.processos.length > 0 &&
                    <div className="listagem">
                        
                            {this.state.processos.map(processo => (
                                <table className="tabela-processos" onClick = {() => this.carregarDetalhes(processo)}>
                                    <thead>
                                        <tr>
                                            <th>Numero</th>
                                            <th>Assunto </th>
                                            <th>interessados</th>
                                            <th>descrição</th>
                                        </tr>
                                    </thead>
                                    <tr key={processo.numero}>
                                        <td>{processo.numero}</td>
                                        <td>{processo.assunto}</td>
                                        <td>{processo.interessados}</td>
                                        <td>{processo.descricao}</td>
                                    </tr>
                                    </table>
                               
                            ))}
                       
                        
                    </div>
                }
                
            </>
        )
    }
}
export default Listagem;