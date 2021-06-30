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
equipamentRouter.get('/detalhe/:id', async (req, res)=>{
    const id = Number(req.params.id);
    
    const retorno = await equipamentoController.retornaEquipamentoById(id);

    console.log("Equipamento:"+ retorno);

    return res.json(retorno);
});
equipamentRouter.put('/update/:id', async (req, res)=>{

    const { nome, descricao } = req.body;
    console.log(req.body);

    const equipamento = new Equipamento();

    equipamento.nome = nome;
    equipamento.descricao = descricao;

    const id = Number(req.params.id);

    //console.log("ID:"+ id +" - Equipamento: "+ equipamento.nome+' - Descrição:'+equipamento.descricao);
    
    const retorno = await equipamentoController.update( id ,equipamento );

    //console.log("Equipamento:"+ retorno);

    var retornoUpdate = {
        "Save": retorno
    }

    return res.json(retornoUpdate);
});
equipamentRouter.get('/historic/:id', async (req, res)=>{

    const id = Number(req.params.id);

    const retorno = await equipamentoController.retornaHistorico(id);

    return res.json(retorno);
});
equipamentRouter.get('/lista', async (req, res)=>{

    const retorno = await equipamentoController.retornaEquipamento();

    return res.json(retorno);
});

export default equipamentRouter