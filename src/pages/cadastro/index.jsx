import React, {Component} from 'react';
import CadastroProcessos from '../../components/cadastroProcesso';
import ProcessoService from '../../services/ProcessoService';
//import Listagem from '../listagem';


class CadastroPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = { processos : [] };
        this.editarProcesso = this.editarProcesso.bind(this);
        //this.excluirProcesso = this.excluirProcesso.bind(this);
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

    // limparProcessoEmEdicao = () => {
    //     this.setState({processoEmEdicao: null})
    // }

    // excluirProcesso(processoAExcluir){
    //     ProcessoService.excluirProcesso(processoAExcluir.id).then(() => this.carregarProcessos());
    //}

    render() {
        return (
            <React.Fragment>
                <CadastroProcessos processo={this.state.processoEmEdicao}/>
            </React.Fragment>
        )
    }
} 

export default CadastroPrincipal;
