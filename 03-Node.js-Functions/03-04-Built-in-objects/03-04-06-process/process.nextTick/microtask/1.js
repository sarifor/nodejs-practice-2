// microtask가 실행되는 시점
// - 호출 스택 > 마이크로태스크 큐(여기) > 태스크 큐

setTimeout(() => console.log("timeout")); // 3rd

Promise.resolve()
  .then(() => console.log("promise")); // 2nd

console.log("code"); // 1st