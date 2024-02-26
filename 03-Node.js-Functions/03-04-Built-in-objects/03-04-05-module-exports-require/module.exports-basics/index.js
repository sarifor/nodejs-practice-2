const testFunc = require("./func");
const { sum, square } = require("./func2");

console.log(testFunc(5)); // 10
console.log(`sum: ${sum(1, 2)}, square: ${square(3)}`); // sum: 3, square: 9