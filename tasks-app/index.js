var _ = require('lodash');
var yargs = require('yargs');

var tasks = new (require('./tasks.js')).tasks;

// correctPassword = process.argv[2] === "-p" && process.argv[3] === "morph";

// if(correctPassword){
//     console.log('Welcome!');
// }else{
//     console.log('You\'re probably not the author.');
// }

tasks.readNote((a)=>console.log(a));
// tasks.writeNote();
