// nextTick
// - setImmedate나 setTimeout보다 먼저 실행됨
setImmediate(() => {
  console.log('immediate');
}); // 4th

process.nextTick(() => {
  console.log('nextTick'); // 1st
})

setTimeout(() => {
  console.log('timeout');
}, 0); // 3rd

// 2nd
// resolve된 Promise도 다른 콜백들보다 우선시됨
Promise.resolve().then(() => console.log('promise'));