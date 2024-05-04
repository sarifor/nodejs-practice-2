// # 순환 참조
// - dep1.js -> dep2.js -> dep1.js 식으로 순환 참조 -> '순환 참조되는' dep1.js는 '빈 객체'가 됨
// - 에러가 발생하지 않고 조용히 빈 객체로 변경됨
// - 순환 참조가 발생하지 않도록 구조를 잘 잡는 것이 중요

const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();
/* 
require dep1 {} // 빈 객체
require dep2 [Function (anonymous)]
dep2 [Function (anonymous)]
dep1 {} // 빈 객체
(node:16000) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
*/