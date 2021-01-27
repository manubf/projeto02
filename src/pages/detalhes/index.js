import React from 'react';
import ProcessoService from '../../services/ProcessoService';
import MyButton from '../../components/button';
import { Link } from 'react-router-dom';


class Detalhes extends React.Component{
    state = { processo: "" };
    
    constructor(props) {
        //const {id, numero, assunto, interessado, descricao,} = processo;
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
    }
    
   
    
    editarProcesso = (field, text) => {
        this.setState({[field]: text});
    }
    //editarProcesso(processo){
        // console.log("processo em edição ", processo);
        // this.setState({processoEmEdicao: processo});
    //}

    excluirProcesso(processoAExcluir){
        alert("Você irá excluir esse processo de maneira permanente!");
        ProcessoService.excluirProcesso(processoAExcluir.id).then(() => this.carregarProcessos());
    }

    render(){
        // if (!this.state.processos || this.state.processos.length === 0) {
        //     return <span>Não existem processos cadastrados.</span>
        // }
        
        return(
            <>
                
                {this.state.processos && this.state.processos.length > 0 &&
                    <div className="EmFoco">
                        <tbody>
                            {this.state.processos.map(processo => (
                                <table className="tabela-processos">
                                    <thead>
                                    <tr>
                                        <th>Processo</th>
                                        <th>data</th>
                                        <th>Assunto </th>
                                        <th>interessados</th>
                                        <th>descrição</th>
                                    </tr>
                                    </thead>
                                    <tr key={processo.numero}>
                                        <td>{processo.numero}</td>
                                        <td>{processo.entrada}</td>
                                        <td>{processo.assunto}</td>
                                        <td>{processo.interessados}</td>
                                        <td>{processo.descricao}</td>
                                    </tr>
                                    <th className="acoes" colSpan="2">Ações</th>
                                        <Link to={{pathname: "/cadastro", search: `?processo=${this.state.processo}`}} >
                                        {/* {e=> this.handleChange("busca", e.target.value)} */}
                                        <MyButton legenda="Editar" onClick = {e => this.editarProcesso(processo, e.target.value)}/>
                                        {/* <td className="acoes"><button onClick = {e => this.handleEditar(processo)}>Editar</button></td> */}
                                        </Link>
                                        <td className="acoes"><button onClick = {e => this.excluirProcesso(processo)}>Excluir</button></td>

                                </table>
                            ))}
                        </tbody>
                        
                    </div>
                }
                
            </>
        )
    }
}
export default Detalhes;