const fs = require('fs');
const lerDiretorio = function() {

  fs.readdir(__dirname, function(erro, diretorio) {
    if (erro) return erro;
    diretorio.forEach(function(arquivo) {
      ler(arquivo);
    });
  });
};

const ler = function(arquivo) {
  const path = './' + arquivo;
  fs.stat(path, function(erro, stat) {
    if (erro) return erro;
    if (stat.isFile()) {
      console.log('%s %d bytes', arquivo, stat.size);
    }
  });
};

lerDiretorio();