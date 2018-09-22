exports.router = {
    initialize : function(config){
        var self = this;
        console.log(config, config.port);
        app = config;
    }
}