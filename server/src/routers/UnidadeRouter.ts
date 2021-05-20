import { Router } from "express"
import UnidadeController from "../controllers/UnidadeController";

const unidadeController = new UnidadeController();

const unidadeRouter = Router();



unidadeRouter.get('/select', async (req, res)=>{
    const unidades = await unidadeController.selectUnidade();

    res.json(unidades);
});

export default unidadeRouter