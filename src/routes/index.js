import Listagem from '../pages/resultadoConsulta'
import ConsultaPrincipal from '../pages/consulta-principal';
import CadastroPrincipal from '../pages/cadastro';


const routes = [
    
    {
        path: '/',
        component: ConsultaPrincipal,
        exact: true
    },
    {
        path: '/cadastro',
        component: CadastroPrincipal,
        
    },
    {
        path: '/listagem',
        component: Listagem,
        
    },

]

 export default routes;
