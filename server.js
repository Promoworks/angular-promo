const express = require ('express');
const http = require ('http');
const path = require ('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
const app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, '/')));


app.get('/*',function(req,res){
    res.render('index');
});


const port = process.env.PORT || 8061;


const server = http.createServer(app);

server.listen(port,() => console.log('Running...'));

