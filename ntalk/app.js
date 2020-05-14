const express = require('express');
const load = require('express-load');


const app = express();

var bodyParser = require('body-parser');
app.set('view engine', 'ejs')  
app.use(bodyParser.urlencoded());



load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(3000, function(err){
  console.log(err);
});