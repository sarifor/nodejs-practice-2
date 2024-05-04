/* # require.main
   - 노드 실행 시 첫 모듈
   - node index.js로 실행 시, 첫 모듈의 이름(require.main.filename)은 'index.js'가 됨
*/

module.exports = 'Find me';

require("./var");

console.log(" ---- index.js ---- ");
// console.log(require.main);
console.log(require.main === module); // true
console.log(require.main.filename); // C:\(중략)\index.js