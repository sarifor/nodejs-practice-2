/* # CommonJS 모듈 using cjs
   - 설정법 3(성공)
   - Within a "type": "module" package, Node.js can be instructed to interpret a particular file 
   - as CommonJS by naming it with a .cjs extension
   - (since both .js and .mjs files are treated as ES modules within a "module" package).
*/

const test2 = require("./test2.cjs"); // cjs 붙이기

test2();
console.log("test1");