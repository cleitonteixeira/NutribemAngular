import { Router } from "express";
import categoriaRouter from "./routers/CategoriaRouter";
import equipamentRouter from "./routers/EquipamentRouter";
import unidadeRouter from "./routers/UnidadeRouter";

const routes = Router();

routes.use('/equipamento', equipamentRouter);
routes.use('/unidade', unidadeRouter)
routes.use('/categoria', categoriaRouter)

export default routes;