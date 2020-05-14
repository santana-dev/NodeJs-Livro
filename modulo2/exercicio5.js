const fs = require('fs');
fs.readFile('./modulo2/exercicio5.index.html', function(erro, arquivo){
if (erro) throw erro;
console.log(arquivo);
});
const arquivo = fs.readFileSync('./modulo2/exercicio5.index.html');
console.log(arquivo);
