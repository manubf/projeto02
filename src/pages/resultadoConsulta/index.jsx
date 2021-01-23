import React, { Component } from 'react';
//import '../assets/listagem.css';
//import {processos} from '../../util/mock';
import ProcessoService from '../../services/ProcessoService';


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

    salvarProcesso = processo => {
        if (processo.id) {
            ProcessoService.atualizarProcesso(processo).then(() => {
                this.carregarProcessos();
                this.setState({processoEmEdicao: null});
            });
            return;
        }

        ProcessoService.inserirProcesso(processo).then(() => {
            this.carregarProcessos();
            this.setState({processoEmEdicao: null})
        });
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
                {this.state.processos && this.state.processos.length > 0 &&
                    <div className="listagem">
                        <table className="tabela-processos">
                            <thead>
                                <tr>
                                    <th>Numero</th>
                                    <th>Assunto </th>
                                    <th>interessado</th>
                                    <th>descrição</th>
                                    <th>Em caso de emergência avisar:</th>
                                    <th className="acoes" colSpan="2">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.processos.map(processo => (
                                    <tr key={processo.numero}>
                                        <td>{processo.numero}</td>
                                        <td>{processo.interessado}</td>
                                        <td>{processo.assunto}</td>
                                        <td>{processo.descricao}</td>
                                        <td className="acoes"><button onClick = {e => this.handleEditar(processo)}>Editar</button></td>
                                        <td className="acoes"><button onClick = {e => this.handleExcluir(processo)}>Excluir</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </>
        )
    }
}
export default Listagem;