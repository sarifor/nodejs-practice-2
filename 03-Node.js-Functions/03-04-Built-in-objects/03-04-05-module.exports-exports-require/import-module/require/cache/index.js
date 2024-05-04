// # require.cache
// - 각 파일(index.js, var.js)의 모듈 객체가 들어 있음
// - 한 번 require한 파일은 require.cache에 저장됨 -> 다음 번 require 때는 require.cache에 있는 것이 재사용됨

module.exports = 'Find me';

require("./var");

console.log(require.cache);
/*
[Object: null prototype] {
  'C:\\(중략)\\index.js': {
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