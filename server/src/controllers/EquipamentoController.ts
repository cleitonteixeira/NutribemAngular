import "reflect-metadata"

import { Equipamento } from "../models/Equipamento";
import { getConnection } from "typeorm";

export default class EquipamentoController{
    async insertEquipamento(equipamento: Equipamento) {
        const sql = 'INSERT INTO equipamento (Unidade_idUnidade, Categoria_idCategoria, Nome, Descricao, Sequencial) VALUES (?, ?, ?, ?, ?)';

        const values = [equipamento.unidadeIdUnidade, equipamento.categoriaIdCategoria, equipamento.nome, equipamento.descricao, equipamento.sequencial];
        await getConnection().query(sql, values);
        
        return console.log("Cadastrado com sucesso!");
    }
    async retornaSequencial(id: number){

        var sql = 'SELECT (COUNT(e.idEquipamento)+1) AS Sequencial FROM equipamento e WHERE e.Categoria_idCategoria = ?';

        const values = [id];
        const sequencial = await getConnection().query(sql,values);

        var codeCat = 9+id;
        
        var codeEquipament = String(sequencial[0]['Sequencial']).padStart(4,'0');

        var newSequencial = String(codeCat).concat(codeEquipament);

        const retorno = newSequencial;
        console.log("Sequencial: "+retorno);
        
        return retorno
    }

    async retornaEquipamento(){
        var sql = 'SELECT e.idEquipamento AS id, e.Nome AS nome, e.Sequencial AS sequencial, u.Nome AS unidade, u.Codigo AS unidadeIdUnidade FROM equipamento e INNER JOIN unidade u ON u.idUnidade = e.Unidade_idUnidade';
        const retorno = await getConnection().query(sql);
        console.log(retorno);
        return retorno;
    }
} 