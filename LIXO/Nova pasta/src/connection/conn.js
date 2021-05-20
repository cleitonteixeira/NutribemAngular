const mysql = require('mysql');
const connection = mysql.createConnection(
{
    host: 'mysql.nutribemrefeicoescoletivas.com.br',
    user: 'nutribemrefeic02',
    database: 'nutribemrefeic02',
    password: 'ADMintranet1748'
});
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });