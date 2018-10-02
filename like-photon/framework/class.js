exports.extend = function(SuperClass, extensions){
    var NewClass = function(config){
        this.config = config;
        this.initialize(config);
    }

    for (property in SuperClass){
        NewClass.prototype[property] = SuperClass.prototype[property];
    }
    for (property in extensions){
        NewClass.prototype[property] = extensions[property];
    }
    return NewClass;
}
