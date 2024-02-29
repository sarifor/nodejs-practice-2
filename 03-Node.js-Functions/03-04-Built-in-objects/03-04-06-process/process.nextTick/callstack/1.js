// 스택
// - console.trace()로 스택 추적을 할 수 있음
function foo() {
  function bar() {
    console.trace(); // 2nd
  }
  bar(); // 3rd
}

console.log("hi"); // 1st
foo(); // 4th

/*
hi
Trace
    at bar (C:\(중략)\1.js:3:13)
    at foo (C:\(중략)\1.js:5:3)
    at Object.<anonymous> (C:\(중략)\1.js:9:1)
*/