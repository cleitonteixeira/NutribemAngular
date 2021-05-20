import "reflect-metadata"

import { getConnection } from "typeorm";
import { Unidade } from "../models/Unidade";
import unidadeRouter from "../routers/UnidadeRouter";

export default class UnidadeController{
    async selectUnidade(): Promise<any>{

        const unidade = await getConnection().query('SELECT u.idUnidade, u.Nome AS Unidade, u.Codigo AS UnidadeCode, r.Nome AS Regiao, r.Codigo AS RegiaoCode, us.Nome as Responsavel FROM unidade u INNER JOIN usuarios us ON us.idusuarios = u.Usuario_idUsuario INNER JOIN regiao r ON r.idRegiao = u.Regiao_idRegiao');
        //console.log(unidade);

        if(!unidade)
            throw console.log("Não encontrado");
        return unidade;
    }
}