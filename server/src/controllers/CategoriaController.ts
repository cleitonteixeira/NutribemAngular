import "reflect-metadata"

import { getConnection } from "typeorm";

export default class CategoriaController{
    async selectCategoria(): Promise<any>{

        const categoria = await getConnection().query('SELECT * FROM categoria;');
        //console.log(unidade);

        if(!categoria)
            throw console.log("Não encontrado");
        return categoria;
    }
}