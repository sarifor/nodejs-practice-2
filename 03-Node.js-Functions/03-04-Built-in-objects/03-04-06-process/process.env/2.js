// # process.env
// - Delete data

const process = require('process'); // 명시하지 않아도 됨
var env = process.env;

delete env.test // Javascript delete operator
console.log(env.test); // undefined