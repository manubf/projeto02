import React from 'react';
import ProcessoService from '../../services/ProcessoService';
import MyButton from '../../components/button';
import './detalhes.css';
import InputConsulta from '../../components/inputConsulta/index'

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
        return (
            <>
                <InputConsulta />
                {this.state.processo &&
                    <div className="EmFoco">
                        <div className="card">
                            <div id="detalheProcesso">
                                <h3>Processo</h3>
                                <p>{this.state.processo.numero}</p>
                            </div>
                            <div id="detalheData">
                                <h3>data</h3>
                                <p>{this.state.processo.entrada}</p>
                            </div>
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
            </>
        )
    }
}
export default Detalhes;