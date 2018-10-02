// function newConst(){
//     this.__proto__.constructor = function(a){
//         this.a = a;
//     }
// }

// var obj = new newConst("allgood");


// // var proto = {
// //     name : "Henry",
// //     say : function(){
// //         return("My name is " + this.name);
// //     }
// // }

// // newConst.prototype = proto;

// var obj2 = new obj.constructor(54);

// // var a1 = new String('AString');
// // var a2 = new Number(222);
// // var a3 = new Boolean("True");

// // var b1 = String('BString');
// // var b2 = Number(444);
// // var b3 = Boolean("False");

var Base = function(config){
    this.config = config;
}

var Const1 = function(config){
    this.a = "a";
    this.b = "b";
    this.prop = config;
}

var Const2 = function(config){
    this.c = "c";
    this.d = 4;
    this.secprop = config;
}

var obj1 = new Const1(1);
var obj2 = new Const2(2);

function extend(superClass, extension){
    var newClass = superClass;
    // for (var property in superClass.prototype){
    //     newClass.prototype[property] = superClass.prototype[property];
    // }
    for (var property in extension){
        newClass.prototype[property] = extension[property];
    }

    return newClass;
}

// var const3 = extend(const1, const2);

var Const3 = extend(Base, {
    x: "y",
    z: "z"
});

var obj3 = new Const3(3);

var Const4 = extend(Const3, {
    p: "p",
    q: 27
});

var obj4 = new Const4(4);

var ExtConst1 = extend(Const1, {
    morocco: "Istanbul",
    New : "Delhi"
});

var extObj1 = new ExtConst1();