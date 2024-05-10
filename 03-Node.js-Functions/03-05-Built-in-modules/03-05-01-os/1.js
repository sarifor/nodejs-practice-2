// # os 모듈
// - The node:os module provides operating system-related utility methods and properties.
// - process 객체와 겹치는 부분도 있음

// require로 모듈을 불러오지 않으면, 에러 남
// ReferenceError: os is not defined
const os = require('os');

console.log(os);