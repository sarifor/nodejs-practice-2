// # this, in 함수 선언문, in 객체
// - 함수를 호출한 객체

const obj1 = {
  whatIsThis: function() {
    console.log('function', this === exports, this === global, this === obj1);
    // function false false true
  }
}

obj1.whatIsThis();