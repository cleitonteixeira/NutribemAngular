import { Router } from "express"
import EquipamentoController from "../controllers/EquipamentoController";
import { Equipamento } from "../models/Equipamento";

const equipamentoController = new EquipamentoController();

const equipamentRouter = Router();

equipamentRouter.post('/add', (req, res)=>{
    const { unidadeIdUnidade, categoriaIdCategoria, nome, descricao, sequencial } = req.body;
    console.log(req.body);

    const equipamento = new Equipamento();

    equipamento.nome = nome;
    equipamento.unidadeIdUnidade = unidadeIdUnidade;
    equipamento.categoriaIdCategoria = categoriaIdCategoria;
    equipamento.descricao = descricao;
    equipamento.sequencial = sequencial

    equipamentoController.insertEquipamento(equipamento);
    return res.json(equipamento);
});
equipamentRouter.get('/sequencial/:id', async (req, res)=>{
    const id = Number(req.params.id);
    
    const retorno = await equipamentoController.retornaSequencial(id);
    
    var retornoSequencial = {
        "Sequencial": retorno
    }

    return res.json(retornoSequencial);
});

export default equipamentRouter