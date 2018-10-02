var express = require('express');
var http = require('http');

var r = require('./router.js');

var app = express();

var port = 8000;

var httpServer = http.createServer(app);

var server = httpServer.listen(port, function(){
    console.log(`Port is ${port}`);
    router = new r.router(app);
    router.runServer();
});
