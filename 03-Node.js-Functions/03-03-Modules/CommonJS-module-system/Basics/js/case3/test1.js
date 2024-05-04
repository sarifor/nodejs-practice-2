// # commonJS 모듈 using js 확장자
// - 설정법 3(실패)

const test2 = require("./test2"); // require is not defined in ES module scope, you can use import instead

test2();
console.log("test1");