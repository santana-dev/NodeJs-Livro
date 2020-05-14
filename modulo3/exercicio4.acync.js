const fs = require('fs');
const leituraAsync = function(arquivo){

  console.log("Fazendo leitura assíncrona");

  var inicio = new Date().getTime();
  console.log(arquivo);
  fs.readFile(arquivo, function(err,data){});
  const fim = new Date().getTime();

  console.log("Bloqueio assíncrono: "+(fim - inicio)+ "ms");
};
module.exports = leituraAsync;