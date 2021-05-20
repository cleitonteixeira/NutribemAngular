// node-typescript/src/server.ts
import express from "express";
import routes from "./routes";
import cors from "cors"

import "./database"
import { createConnection } from "typeorm";

createConnection().then(async connection => {
    console.log("Conectou");
}).catch(error => console.log(error));

const server = express();

server.use(cors());
server.use(express.urlencoded({extended: true}))
server.use(express.json());
server.use(routes);

server.get("/", (_, res) => {
    res.send("Hello ts-node!");
});


export default server;