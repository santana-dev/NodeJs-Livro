const http = require("http");

const Requisicao = function(req,res){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hello World!</h1>");
  res.end();
};

const server = http.createServer(Requisicao);

servidorLogou = function(){
  console.log("Servidor Ola Mundo Ligou");
}

server.listen(3000, servidorLogou);