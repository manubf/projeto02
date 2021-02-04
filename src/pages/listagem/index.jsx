import React, { Component } from 'react';
import './listagem1.css';
import ProcessoService from '../../services/ProcessoService';
import InputConsulta from '../../components/inputConsulta';
import MyButton from '../../components/button';
import { Link } from 'react-router-dom';
//import Detalhes from './detalhes'


class Listagem extends Component{

    constructor(props) {
        super(props);
        this.state = {processos : [], buscaAtual: '' };
        this.carregarDetalhes = this.carregarDetalhes.bind(this);
    }
    
    componentDidMount() {
        this.carregarProcessos();
    }
    
    componentDidUpdate(prevProps) {
        const buscaProp = this.props.history.location.search.replace('?busca=', '');
        const buscaState = this.state?.buscaAtual?.replace('?busca=', '');
        if (buscaProp !== buscaState) {
          this.carregarProcessos();
        }
      }
    
    async carregarProcessos() {
        const busca = this.props.history.location.search.replace('?busca=', '')
        const processos = await ProcessoService.buscarProcessos(busca);
        this.setState({processos, buscaAtual: busca });
        console.log(busca);
    }

    carregarDetalhes(processo){
        const {id} = processo;
        console.log("clicou!",processo )
        this.props.history.push({
            pathname: '/detalhes',
            search: `?processo=${id}` 
        })
        console.log("clicou!",processo)
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
                                <table className="tabela-processos" key={processo.numero} onClick = {() => this.carregarDetalhes(processo)}>
                                    <thead>
                                        <tr>
                                            <th>Numero</th>
                                            <th>Assunto </th>
                                            <th>interessados</th>
                                            <th>descrição</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{processo.numero}</td>
                                            <td>{processo.assunto}</td>
                                            <td>{processo.interessados}</td>
                                            <td>{processo.descricao}</td>
                                        </tr>
                                    </tbody>
                                </table>
                               
                            ))}
                       
                        
                       {/* <Detalhes/> */}
                    </div>
                }
                
            </>
        )
    }
}
export default Listagem;