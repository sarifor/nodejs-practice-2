// # Timers
// - setTimeout()

// 기본
setTimeout(() => {
  console.log('Execute in 1.5 sec');
}, 1500);

// 두 번째 인자 생략
setTimeout(() => {
  console.log('Execute ASAP');
}); // default ms(0)