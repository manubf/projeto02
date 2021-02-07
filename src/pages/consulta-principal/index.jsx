import React from 'react';
import './consulta.css';
import InputConsulta from '../../components/inputConsulta';
import { Link } from 'react-router-dom';

class ConsultaPrincipal extends React.Component {

    render(){
        return (
            <div id='divconsulta'>
                <h1 id='titulo'>
                    Busca de Processos
                </h1>
                <InputConsulta/>
                <h2 id='text2'>
                    Você pode criar um novo processo 
                    <Link to="/cadastro"> clicando aqui</Link>
                </h2>
            </div>
        )
    }
}

export default ConsultaPrincipal;