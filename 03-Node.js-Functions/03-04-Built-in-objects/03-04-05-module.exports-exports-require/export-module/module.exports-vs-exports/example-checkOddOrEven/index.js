// # module.exports vs. exports
// - module.exports: 하나만 내보내기
// - export: 여러 값 내보내기

const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 1
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));