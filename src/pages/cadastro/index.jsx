import React, { Component } from 'react';import MyButton from '../../components/button/index';
import InputCadastro from '../../components/inputCadastro/index';
import ProcessoService from '../../services/ProcessoService';
import './cadastroProcesso.css'


class CadastroPrincipal extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            id: '', 
            assunto: '', 
            descricao: '',
            interessados: [],
            novoInteressado: '',
        };
    }

    componentDidMount() {
        this.carregarProcesso();
    }

    carregarProcesso = async () => {
        const id = this.props.history.location.search.replace('?processo=', '');
        if (id !== "") {
            const processo = await ProcessoService.buscarProcesso(id);
            this.setState({ ...processo });
        }
    }

    salvarProcesso = async () => {
        if (this.state.id !== '') {            
            const tiraNovoInteressado = ({novoInteressado, ...processo}) => processo;
            const processo = tiraNovoInteressado(this.state);
            await ProcessoService.atualizarProcesso(processo);
        } else {
            const { assunto, descricao, interessados } = this.state;
            await ProcessoService.inserirProcesso({ assunto, descricao, interessados });
        }
    }

    handleChange = (field, text) => {
        this.setState({ [field]: text });
    }

    adicionarInteressado = () => {
        if (this.state.novoInteressado.trim() !== '') {
            this.setState({ interessados: [...this.state.interessados, this.state.novoInteressado] });
        }
    }

    renderInteressados = () => {
        const { interessados } = this.state;
        if (Array.isArray(interessados) && interessados.length > 0) {
            return interessados.map((interessado, i) => (<span key={i}>{interessado}</span>));
        }

        return null;
    }

    render() {
        return (
            <React.Fragment>
                 <div id='cadastro'>
                    <p>Cadastro de processo</p>
                    <InputCadastro name="assunto" content="Assunto:" value={this.state.assunto} onchange={e=> this.handleChange("assunto", e.target.value)} />
                    <p>Interessados:</p>
                    { this.renderInteressados() }
                    <InputCadastro name="novoInteressado" value={this.state.novoInteressado} content="Novo interessado:" onchange={e=> this.handleChange("novoInteressado", e.target.value)} />
                    <MyButton onClick={this.adicionarInteressado} legenda="ADICIONAR" />
                    <InputCadastro name="descricao" content="Descrição:" value={this.state.descricao} onchange={e=> this.handleChange("descricao", e.target.value)} />
                    <MyButton onClick={this.salvarProcesso} legenda="salvar" />
                </div>
            </React.Fragment>
        )
    }
} 

export default CadastroPrincipal;
