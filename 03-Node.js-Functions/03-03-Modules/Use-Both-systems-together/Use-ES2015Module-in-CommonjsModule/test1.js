// # CommonJS 모듈에서 ES2015 모듈 사용
// - 불가능

const test2 = require("./test2.mjs"); // Error [ERR_REQUIRE_ESM]: require() of ES Module (중략) test2.mjs not supported.

test2();
console.log("test1");