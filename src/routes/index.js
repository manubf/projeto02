import Listagem from '../pages/listagem'
import ConsultaPrincipal from '../pages/consulta-principal';
import CadastroPrincipal from '../pages/cadastro';
import Detalhes from '../pages/detalhes'

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
    {
        path: '/detalhes',
        component: Detalhes,
        
    },

]

 export default routes;
