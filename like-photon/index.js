var express = require('express');
var http = require('http');

var router = require('./router.js');

var app = express();

port = 8000;

app.get('/', function(req,res){
    res.send(String(app));
});

httpServer = http.createServer(app);

server = httpServer.listen(port, function(){
    console.log(`Port is ${port}`);
    router = router.router;
    router.initialize(app);
});

