console.log(" ---- var.js ---- ");
// console.log(require.main);
console.log(require.main === module); // false
console.log(require.main.filename); // C:\(중략)\index.js

exports.odd = "This is odd";
exports.even = "This is even";