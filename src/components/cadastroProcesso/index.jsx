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
        interessados: ['amarula','banana'],
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
        console.log(field, text );
    }

    adicionarInteressado = () => {
        this.setState({interessados:[...this.state.interessados,this.state.novointeressado]})
        // this.state.interessados.push();
        //this.handleChange("interessados",this.state.interessados);
        //setFieldValue(name, interessados);
    }

    renderInteressados = () => {
        const { interessados } = this.state;
        if (Array.isArray(interessados) && interessados.length > 0) {
            return interessados.map(i => (<span>{i}</span>));
        }  
        
        return null;
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
                    { this.renderInteressados() }
                    <InputCadastro name="novointeressado" content="Novo interessado:" onchange={e=> this.handleChange("novointeressado", e.target.value)}/>
                    <MyButton onClick={this.adicionarInteressado} legenda="ADICIONAR"/>
                    <InputCadastro name="descricao" content="Descrição:" value={this.descricao} onchange={e=> this.handleChange("descricao", e.target.value)}/>
                    <MyButton onClick={this.salvarProcesso} legenda="salvar"/>
                </div>
            </React.Fragment>
        )
    }
}

export default CadastroProcesso;

