// # exports 객체
// - 모듈을 만들 때 module.exports 대신 사용할 수 있음
// - '여러 가지' 값을 내보내는 노드 모듈을 만들 때 exports 객체의 프로퍼티로 할당

const { mean, stddev } = require("./func.js");

console.log(mean([1, 2, 3])); // 2
console.log(stddev(4)); // 16