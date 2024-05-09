// # this in 객체
// - = module.exports, exports

const obj1 = {
  thisValue: this
}

console.log(obj1.thisValue); // {}
console.log(obj1.thisValue === module.exports); // true
console.log(obj1.thisValue === exports); // true
console.log(obj1.thisValue === global); // false