import { ConnectionManager } from "typeorm";

const c = new ConnectionManager();

export const connection = c.create({
    "type": "mysql",
    "host": "mysql.nutribemrefeicoescoletivas.com.br",
    "port": 3306,
    "username": "nutribemrefeic02",
    "password": "ADMintranet1748",
    "database": "nutribemrefeic02",
    "synchronize": false,
    "logging": false,
    "entities": [
        __dirname+'/models/*.ts'
    ]
});