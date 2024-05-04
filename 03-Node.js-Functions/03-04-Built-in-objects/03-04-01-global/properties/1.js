// # global 객체
// - 브라우저의 window와 같은 전역 객체
// - require, console 등이 들어 있음
// - require 등 일부 속성은 REPL에서만 보임(이유: 추후 보충)

console.log(!!require); // true

console.log(!!global.require); // false

console.log(global);
/*
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 70.72850000858307,
      nodeStart: 6.757499992847443,
      v8Start: 12.523600041866302,
      bootstrapComplete: 43.65839999914169,
      environment: 25.56190001964569,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1714803903154.51
  },
  fetch: [AsyncFunction: fetch]
}
*/