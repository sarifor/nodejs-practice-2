// 함수 선언문 내부의 this
// - global 객체
function whatIsThis() {
  console.log('function', this === exports, this === global);
}

whatIsThis(); // function false true