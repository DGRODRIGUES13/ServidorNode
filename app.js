var express = require("express"); /*componente principal do node*/
var app = express();
var port = process.env.PORT || 3000; /**variavel port, porta do servidor*/

app.get("/", function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.send("Olá"); 
});

app.listen(port, () => {
  console.log(`Servidor rodando com a porta ${port}`)
});



