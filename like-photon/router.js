var b = require('./framework/base.js');
var c = require('./framework/class.js');

exports.router = c.extend(b.base,{
    app: null,
    config: null,
    initialize: function(config){
        this.config = config;
        this.app = config;
    },
    runServer : function(){
        this.activateRoutes();
        this.activateAPI();
    },
    activateRoutes : function(){
        var app = this.app;
        app.get('/', function(req,res){
            res.send("This works basically...");
        });
    },
    activateAPI : function(){
    }
});
