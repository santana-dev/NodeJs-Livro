
var fs = require('fs');
for(var i = 1; i <= 5; i++) {
var file = "./modulo3/exercicio3.async-txt" + i + ".txt";
fs.writeFile(file, "Hello Node.js!", function(err, out) {
console.log(out);
});
}
