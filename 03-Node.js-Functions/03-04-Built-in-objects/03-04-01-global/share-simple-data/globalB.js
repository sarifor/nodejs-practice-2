// # global 객체
// - 전역 객체 -> 파일 간 간단한 데이터 공유

const A = require('./globalA');

global.message = "Hi there";

console.log(A()); // Hi there
console.log(global);