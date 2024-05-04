/* # ES2015 모듈 using mjs
   - 설정법 2(성공)
   - Within a "type": "commonjs" package, Node.js can be instructed to interpret a particular file 
   - as an ES module by naming it with an .mjs extension 
   - (since both .js and .cjs files are treated as CommonJS within a "commonjs" package).
*/

import test2 from "./test2.mjs";

test2();
console.log("test1");