// # this, in 화살표 함수 선언문, in 객체
// - = 상위 스코프의 this: module.exports, exports

const obj1 = {
  whatIsThis: () => {
    console.log('function', this === exports, this === global, this === obj1);
    // function true false false
  }
};

obj1.whatIsThis();