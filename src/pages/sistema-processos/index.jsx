import React, {Component} from 'react';
import CadastroProcesso from '../../components/cadastroProcesso';
// import {alunos} from '../util/constantes';
import ProcessoService from '../../services/ProcessoService';


class SistemaProcessos extends Component {
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
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.processoEmEdicao === prevState.processoEmEdicao) {
            return;
        }
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


    render() {
        return (
            <React.Fragment>
                <>
                    <CadastroProcesso processo={this.state.processoEmEdicao} />
                    
                </>
            </React.Fragment>
        )
    }
}

export default SistemasProcessos;

