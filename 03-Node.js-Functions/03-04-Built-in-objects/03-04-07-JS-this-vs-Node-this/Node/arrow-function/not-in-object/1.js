// # this, in 화살표 함수 선언문, in 객체 X
// - = 상위 스코프의 this: module.exports, exports

const whatIsThis = () => {
  console.log('function', this === exports, this === module.exports, this === global);
};

whatIsThis(); // function true true false