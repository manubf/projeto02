import React from 'react';
import './cadastroProcesso.css';
import MyButton from '../button/index';
import InputCadastro from '../inputCadastro/index';
import ProcessoService from "../../services/ProcessoService";

// import * as yup from 'yup';

// const PROCESSO_INICIAL = {
//     assunto: "",
//     interessados: [],
//     novointeressado: "",
//     descricao: "",       
// }
// const PROCESSO_SCHEMA = yup.object().shape({
//     assunto: yup.string().required('Informe o assunto:'),
//     interessados: yup.string(),
//     novointeressado: yup.string(),
//     descricao: yup.string(),
// })


class CadastroProcesso extends React.Component {

    state = {
        teveAlteracao: false,
        assunto: "",
        interessados: [],
        novointeressado: "",
        descricao: "",       
    }

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

    // handleNovoProcesso = (handleReset) => {
    //     this.props.limpar();
    //     handleReset(PROCESSO_INICIAL);
    // }

    render(){
        return (
            <React.Fragment>
                <div id='cadastro'>
                    <p>Cadastro de processo</p>
                    <InputCadastro name="assunto" content="Assunto:" value={this.assunto} onchange={e=> this.handleChange("assunto", e.target.value)}/>
                    <InputCadastro name="interessados" content="Interessados" value={this.interessados} onchange={e=> this.handleChange("interessados", e.target.value)}/>
                    <InputCadastro name="novointeressado" content="Novo interessado:" value={this.novointeressado} onchange={e=> this.handleChange("novointeressado", e.target.value)}/>
                    <InputCadastro name="descricao" content="Descrição:" value={this.descricao} onchange={e=> this.handleChange("descricao", e.target.value)}/>
                    <MyButton onClick={this.salvarProcesso} legenda="salvar"/>
                </div>
            </React.Fragment>
        )
    }
}

export default CadastroProcesso;

