/* wrapper
- Before a module's code is executed, Node.js will wrap it with a function
- = node 명령어를 통해 js 파일 하나를 실행하면, 파일 전체 script가 하나의 함수 안에 들어가게 된다.
- wrapper that looks like the following:
  (function(exports, require, module, __filename, __dirname) {
   // Module code actually lives in here
  });
- By doing this, It keeps top-level variables (defined with var, const, or let) 
  ** scoped to the module** rather than the global object.
*/ 

console.log(this); // {} // 하나의 함수 내부에 들어가게 되는 것이므로, **지역 스코프**를 가지게 된다
console.log(exports); // {}
console.log(require); // [Function: require] { (중략) }
console.log(module); // { id: '.', path: 'C:\\(중략), exports: {}, (중략) }
console.log(__filename); // C:\(중략)\top-level-scope-this\2.js
console.log(__dirname); // C:\(중략)\top-level-scope-this