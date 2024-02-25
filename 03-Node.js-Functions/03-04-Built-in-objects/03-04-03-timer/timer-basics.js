// setTimeout 기본
setTimeout(() => {
  console.log('Execute in 1.5 sec');
}, 1500);


// setTimeout 두 번째 인자 생략
setTimeout(() => {
  console.log('Execute ASAP');
});


// 5초가 지나면 함수 호출 취소
// - setTimeout/setInterval의 반환값을 변수에 저장하면 함수 호출 취소/멈추기를 할 수 있음
let clock = setInterval(() => {
  console.log('Execute every 1 sec');
}, 1000);
setTimeout(() => {
  clearInterval(clock)
}, 5000);