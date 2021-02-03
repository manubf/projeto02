import React, {Component} from 'react';
//import CadastroProcessos from '../../components/cadastroProcesso';
import ProcessoService from '../../services/ProcessoService';
import './cadastroProcesso.css'
//import Listagem from '../listagem';
import MyButton from '../../components/button/index';
import InputCadastro from '../../components/inputCadastro/index';



class CadastroPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {processo : {}}
        this.salvarProcesso = this.salvarProcesso.bind(this);
        //this.state = { processos : [] };
        //this.editarProcesso = this.editarProcesso.bind(this);
        //this.excluirProcesso = this.excluirProcesso.bind(this);
    }

    componentDidMount() {
        this.carregarProcesso();
        // this.carregarProcessos();
    }
    
    // async carregarProcessos() {
    //     const processos = await ProcessoService.buscarProcessos();
    //     this.setState({processos});
    // }

    async carregarProcesso() {
        const id = this.props.history.location.search.replace('?processo=', '')
        const processo = await ProcessoService.buscarProcesso(id);
        //this.setState({processoEmEdicao: processo});
        this.setState({processo});
        console.log("chegou! cadastro",processo )
        
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.processoEmEdicao === prevState.processoEmEdicao) {
    //         return;
    //     }
    // }

    salvarProcesso = async () => {
        if (this.id) {
            await ProcessoService.atualizarProcesso(this.state);
        } else {
            await ProcessoService.inserirProcesso(this.state);
        }
        
        this.setState({processoEmEdicao: null});
    }

    handleChange = (field, text) => {
        this.setState({[field]: text});
    }

    adicionarInteressado = () => {
        this.setState({interessados:[...this.state.interessados,this.state.novointeressado]})
    }

    renderInteressados = () => {
        const { interessados } = this.state;
        if (Array.isArray(interessados) && interessados.length > 0) {
            return interessados.map(i => (<span>{i}</span>));
        }

        return null;
    }


    // editarProcesso(processo){
    //     console.log("processo em edição ", processo);
    //     this.setState({processoEmEdicao: processo});
    // }

    // limparProcessoEmEdicao = () => {
    //     this.setState({processoEmEdicao: null})
    // }

    // excluirProcesso(processoAExcluir){
    //     ProcessoService.excluirProcesso(processoAExcluir.id).then(() => this.carregarProcessos());
    //}

    render() {
        return (
            <React.Fragment>
                 <div id='cadastro'>
                    <p>Cadastro de processo</p>
                    <InputCadastro name="assunto" content="Assunto:" value={this.state.processo.assunto} onchange={e=> this.handleChange("assunto", e.target.value)}/>
                    <p>Interessados:</p>
                    { this.renderInteressados() }
                    <InputCadastro name="novointeressado" content="Novo interessado:" onchange={e=> this.handleChange("novointeressado", e.target.value)}/>
                    <MyButton onClick={this.adicionarInteressado} legenda="ADICIONAR"/>
                    <InputCadastro name="descricao" content="Descrição:" value={this.state.processo.descricao} onchange={e=> this.handleChange("descricao", e.target.value)}/>
                    <MyButton onClick={this.salvarProcesso} legenda="salvar"/>
                </div>
            </React.Fragment>
        )
    }
} 

export default CadastroPrincipal;
