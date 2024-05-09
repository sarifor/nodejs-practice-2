// # this, in 함수 선언문, in 객체 X
// - global 객체

function whatIsThis() {
  console.log('function', this === exports, this === global);
  // function false true
}

whatIsThis();