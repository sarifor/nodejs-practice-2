console.log('It is okay to use require not in the toppest line');

module.exports = 'Find me';

require("./var");


// require.cache
// - 각 파일의 모듈 객체 들어 있음
// - 한 번 require한 파일은 require.cache에 저장됨
console.log("This is 'require.cache'");
console.log(require.cache);
/* This is 'require.cache'
[Object: null prototype] {
  'C:\\(중략)\\require.js': {
    (중략)
    exports: 'Find me',
    (중략)
  },
  'C:\\(중략)\\var.js': {
    (중략)
    exports: { odd: 'This is odd', even: 'This is even' },
    (중략)
  }
} */


// require.main
// - 노드 실행 시 첫 모듈
console.log("this is 'require.main'");
console.log(require.main);
console.log("require.js: ", require.main === module); // true
console.log(require.main.filename); // C:\(중략)\require.js // node require(파일명)로 실행했으므로, 첫 모듈의 이름은 'require.js'가 됨