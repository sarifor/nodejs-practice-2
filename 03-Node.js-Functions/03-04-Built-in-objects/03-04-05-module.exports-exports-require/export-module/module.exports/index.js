// # module.exports
// - 함수나 클래스 '하나'만 내보낼 땐 module.exports에 할당
// - 함수 여러 개를 객체 '하나'로 내보낼 수도 있음

const testFunc = require("./func");
const { sum, square } = require("./func2");

console.log(testFunc(5)); // 10
console.log(`sum: ${sum(1, 2)}, square: ${square(3)}`); // sum: 3, square: 9