import axios from 'axios';
import * as constants from './constants';

const BASE_URL = `${constants.DEVINHOUSE_API}/processos`;

class ProcessoService {
   
    buscarProcessos(busca) {
		const url = busca ? `${BASE_URL}?busca=${busca}` : BASE_URL;
		return axios.get(url)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
    }
    
    buscarProcesso(id) {
		return axios.get(`${BASE_URL}/${id}`)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
	}

    inserirProcesso(processo) {
        return axios.post(BASE_URL, processo)
			.catch(error => {
				throw error;
			})
    }
    
    atualizarProcesso(processo) {
		return axios.put(BASE_URL, processo)
			.catch(error => {
				throw error;
			})
    }
    excluirProcesso(id) {
        return axios.delete(`${BASE_URL}/${id}`)
        .catch(error => {
            throw error;
        })
    }
}

export default new ProcessoService();