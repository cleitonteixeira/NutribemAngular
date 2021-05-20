import { Router } from "express"
import CategoriaController from "../controllers/CategoriaController";

const categoriaController = new CategoriaController();

const categoriaRouter = Router();

categoriaRouter.get('/select', async (req, res)=>{
    const categorias = await categoriaController.selectCategoria();

    res.json(categorias);
});

export default categoriaRouter