const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

const db = require("src/connection/conn");
console.log('Começou!');

const clientes = await db.selectCustomers();


app.get("/", function(req, res){
  res.send("TESTE")
});

http.createServer(app).listen(3100, ()=> console.log("Servidor Rodando"));