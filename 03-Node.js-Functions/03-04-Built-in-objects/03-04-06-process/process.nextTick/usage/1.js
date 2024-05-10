// # process.nextTick(콜백)
// - 마이크로태스크는 다른 이벤트 루프에서 대기하는 콜백 함수보다 '먼저' 실행됨
// - *마이크로태스크: process.nextTick으로 받은 콜백 함수, resolved Promise

// 4th
setImmediate(() => {
  console.log('immediate');
});

// 1st
process.nextTick(() => {
  console.log('nextTick');
})


// 3rd
setTimeout(() => {
  console.log('timeout');
}, 0);

// 2nd
Promise.resolve().then(() => console.log('promise'));