import React, {Component} from 'react';
import CadastroProcessos from '../../components/cadastroProcesso';
import ProcessoService from '../../services/ProcessoService';
//import Listagem from '../listagem';


class CadastroPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {processo : {}}
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
                <CadastroProcessos processo={this.state.processo}/>
            </React.Fragment>
        )
    }
} 

export default CadastroPrincipal;
