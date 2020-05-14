const fs = require('fs');

  fs.readdir(__dirname, function(erro, contents) {
  if (erro) { 
    throw erro; 
  }
  const inicio = new Date().getTime();
  contents.forEach(function(content) {
    const path = './' + content;  
    fs.stat(path, function(erro, stat) {
      if (erro) { throw erro; }
      if (stat.isFile()) {
        const fim = new Date().getTime();
        console.log('%s %d bytes - %d time', content, stat.size,fim - inicio);
      }
    });
  });
});
