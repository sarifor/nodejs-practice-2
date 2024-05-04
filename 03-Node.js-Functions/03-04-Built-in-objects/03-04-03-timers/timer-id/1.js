// # Timer ID
// - setTimeout/setInterval의 반환값을 변수에 저장하면 함수 호출 취소/멈추기를 할 수 있음

// 5초가 지나면 함수 호출 취소
let clock = setInterval(() => {
  console.log('Execute every 1 sec');
}, 1000);
setTimeout(() => {
  clearInterval(clock)
}, 5000);