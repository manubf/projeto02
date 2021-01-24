import React, { Component } from 'react';
import './listagem1.css';
//import {processos} from '../../util/mock';
import ProcessoService from '../../services/ProcessoService';
import InputConsulta from '../../components/inputConsulta';
import MyButton from '../../components/button';
import { Link } from 'react-router-dom';


class Listagem extends Component{
    //const {id, numero, assunto, interessado, descricao,} = processo;

    constructor(props) {
        super(props);
        this.state = {processos : []};
        this.editarProcesso = this.editarProcesso.bind(this);
        this.excluirProcesso = this.excluirProcesso.bind(this);
    }
    
    componentDidMount() {
        this.carregarProcessos();
    }

    async carregarProcessos() {
        const processos = await ProcessoService.buscarProcessos();
        this.setState({processos});
        console.log(processos);

    }
    
    handleEditar(processo){
        console.log("processo em edição ",processo);
        this.props.editar(processo);
    }
    handleExcluir(processo){
        console.log("processo em exclusão ",processo);
        this.props.excluir(processo);
    }
    editarProcesso(processo){
        console.log("processo em edição ", processo);
        this.setState({processoEmEdicao: processo});
    }

    excluirProcesso(processoAExcluir){
        ProcessoService.excluirProcesso(processoAExcluir.id).then(() => this.carregarProcessos());
    }

    limparProcessoEmEdicao = () => {
        this.setState({processoEmEdicao: null})
    }

    render(){
        if (!this.state.processos || this.state.processos.length === 0) {
            return <span>Não existem processos cadastrados.</span>
        }
        
        return(
            <>
                <InputConsulta/>
                <Link to="/cadastro"><MyButton legenda="NOVO"/></Link>
                {this.state.processos && this.state.processos.length > 0 &&
                    <div className="listagem">
                        <tbody>
                                {this.state.processos.map(processo => (
                                    <table className="tabela-processos">
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
                            </tbody>
                        
                    </div>
                }
            </>
        )
    }
}
export default Listagem;