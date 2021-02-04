import React from 'react';
import ProcessoService from '../../services/ProcessoService';
import MyButton from '../../components/button';
import './detalhes.css';





class Detalhes extends React.Component {


    constructor(props) {
        super(props);
        this.state = { processo: {} }
        this.editarProcesso = this.editarProcesso.bind(this);
        this.excluirProcesso = this.excluirProcesso.bind(this);
    }


    componentDidMount() {
        this.carregarProcessoDetalhe();
    }

    async carregarProcessoDetalhe() {
        const id = this.props.history.location.search.replace('?processo=', '')
        const processo = await ProcessoService.buscarProcesso(id);
        this.setState({ processo });
        console.log("chegou! para detalhes", processo)

    }

    editarProcesso(processo) {
        const { id } = processo;
        console.log("clicou para edição", processo)
        this.props.history.push({
            pathname: '/cadastro',
            search: `?processo=${id}`
        })
    }


    excluirProcesso(processoAExcluir) {
        alert("Você irá excluir esse processo de maneira permanente!");
        ProcessoService.excluirProcesso(processoAExcluir.id).then(() => this.carregarProcessos());
        this.props.history.push("/")
    }

    render() {
        // if (!this.state.processos || this.state.processos.length === 0) {
        //     return <span>Não existem processos cadastrados.</span>
        // }

        return (
            <>


                {this.state.processo &&
                    <div className="EmFoco">
                        <div id="detalheProcesso">
                            <h3>Processo</h3>
                            <p>{this.state.processo.numero}</p>
                        </div>
                        <div id="detalheData">
                            <h3>data</h3>
                            <p>{this.state.processo.entrada}</p>
                        </div>
                        <div id="detalheAssunto">
                            <h3>Assunto </h3>
                            <p>{this.state.processo.assunto}</p>
                        </div>
                        <div id="detalheInteressados" >
                            <h3>interessados</h3>
                            <p>{this.state.processo.interessados}</p>
                        </div>
                        <div id="detalheDescricao">
                            <h3>descrição</h3>
                            <p>{this.state.processo.descricao}</p>
                        </div>






                        <div className="acoes" colSpan="2">
                            <MyButton legenda="Editar" onClick={() => this.editarProcesso(this.state.processo)} />
                            <MyButton legenda="excluir" onClick={e => this.excluirProcesso(this.state.processo)} />
                        </div>



                    </div>
                }


                {/* {this.state.processo &&
                    <div className="EmFoco">
                        <table className="tabela-detalhe" key={this.state.processo.numero}>
                            <thead>
                                <tr>
                                    <th>Processo</th>
                                    <th>data</th>
                                    <th>Assunto </th>
                                    <th>interessados</th>
                                    <th>descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.processo.numero}</td>
                                    <td>{this.state.processo.entrada}</td>
                                    <td>{this.state.processo.assunto}</td>
                                    <td>{this.state.processo.interessados}</td>
                                    <td>{this.state.processo.descricao}</td>
                                </tr>
                            </tbody>
                            <th className="acoes" colSpan="2">Ações</th>
                                <MyButton legenda="Editar" onClick = {() => this.editarProcesso(this.state.processo)}/>
                                <MyButton legenda="excluir" onClick = {e => this.excluirProcesso(this.state.processo)}/>
                        </table>
                            
                        
                        
                    </div>
                }
                 */}
            </>
        )
    }
}
export default Detalhes;