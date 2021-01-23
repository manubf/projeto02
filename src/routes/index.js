import Main from '../pages/main';
import EstruturaConsulta from '../pages/consulta'
import Listagem from '../pages/resultadoConsulta'


const routes = [
    {
        path: '/',
        component: Main,
        exact: true
    },
   
    {
        path: '/consulta',
        component: EstruturaConsulta,
        exact: true
    },
    {
        path: '/listagem',
        component: Listagem,
        exact: true
    },

]

 export default routes;
