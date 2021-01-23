import React from 'react';
import './consulta.css';
import InputConsulta from '../../components/inputConsulta';

class EstruturaConsulta extends React.Component {

    render(){
        return (
            <div id='divconsulta'>
                <h1 id='titulo'>
                    Busca de Processos
                </h1>
                <InputConsulta/>
                <h2 id='text2'>
                    Você pode criar um novo processo 
                    <a href="">
                        Clicando aqui
                    </a>
                </h2>
            </div>
        )
    }
}

export default EstruturaConsulta;