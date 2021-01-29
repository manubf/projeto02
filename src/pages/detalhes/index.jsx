import React from 'react';
import ProcessoService from '../../services/ProcessoService';
import MyButton from '../../components/button';
import { Link} from 'react-router-dom';



class Detalhes extends React.Component{
    //state = { processo: "" };
    
    constructor(props) {
        //const {id, numero, assunto, interessado, descricao,} = processo;
        super(props);
        this.state = {processo : {"assunto":"mika"}}
        //this.state = {processos : []};
        this.editarProcesso = this.editarProcesso.bind(this);
        this.excluirProcesso = this.excluirProcesso.bind(this);
    }
    
    componentDidMount() {
        this.carregarProcessoDetalhe();
    }

    async carregarProcessoDetalhe(processo) {
        console.log("chegou!",processo )
        //const processos = await ProcessoService.buscarProcessos();
        //this.setState({processos});
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
        this.props.history.push("/")
    }

    render(){
        // if (!this.state.processos || this.state.processos.length === 0) {
        //     return <span>Não existem processos cadastrados.</span>
        // }
        
        return(
            <>
                
                {this.state.processo &&
                    <div className="EmFoco">
                        
                            
                                <table className="tabela-detalhe">
                                    <thead>
                                    <tr>
                                        <th>Processo</th>
                                        <th>data</th>
                                        <th>Assunto </th>
                                        <th>interessados</th>
                                        <th>descrição</th>
                                    </tr>
                                    </thead>
                                    <tr key={this.state.processo.numero}>
                                        <td>{this.state.processo.numero}</td>
                                        <td>{this.state.processo.entrada}</td>
                                        <td>{this.state.processo.assunto}</td>
                                        <td>{this.state.processo.interessados}</td>
                                        <td>{this.state.processo.descricao}</td>
                                    </tr>
                                    <th className="acoes" colSpan="2">Ações</th>
                                        <Link to={{pathname: "/cadastro", search: `?processo=${this.state.processo}`}} >
                                        {/* {e=> this.handleChange("busca", e.target.value)} */}
                                        <MyButton legenda="Editar" onClick = {e => this.editarProcesso(this.state.processo, e.target.value)}/>
                                        {/* <td className="acoes"><button onClick = {e => this.handleEditar(processo)}>Editar</button></td> */}
                                        </Link>
                                        <td className="acoes"><button onClick = {e => this.excluirProcesso(this.state.processo)}>Excluir</button></td>

                                </table>
                            
                        
                        
                    </div>
                }
                
            </>
        )
    }
}
export default Detalhes;