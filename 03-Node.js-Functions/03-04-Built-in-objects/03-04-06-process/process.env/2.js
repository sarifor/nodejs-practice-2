// process.env
const process = require('process');
var env = process.env;

// - Set new data
env.test = "This is test";
console.log(env.test); // This is test

// - Delete data
delete env.test // Javascript delete operator // does work
console.log(env.test); // undefined