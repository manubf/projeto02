import { createServer, Model } from 'miragejs';
import * as constants from './constants';
import { processos } from '../util/mock';

export function criarServidor({enviroment = 'test'} = {}){
    let server = createServer({
        enviroment,

        models: {
            processo: Model
        },
        
        seeds(server){
            processos.forEach(processos => server.create("processo", processos));
            
        },

        routes() {
            this.namespace = constants.DEVINHOUSE_API;
            
            this.get("/processos", (schema, request) => {
                const busca = request.queryParams.busca;
        
                if (busca) { 
                  return schema.processos.where(processo => processo.interessados.includes(busca) || processo.assunto.includes(busca) || processo.descricao.includes(busca)).models
                }
        
                return schema.processos.all().models;
              });
            
            
            
            //this.get('/processos', schema => schema.processos.all().models);
            
            this.post("/processos", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                return schema.processos.create(attrs);
            });
            
            this.put("/processos", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                return schema.processos.create(attrs);
            });
            this.delete("/processos/:id", (schema, request) => {
                const id = request.params.id;
                return schema.processos.find(id).destroy();
            });

        }

    })

    return server;
}
