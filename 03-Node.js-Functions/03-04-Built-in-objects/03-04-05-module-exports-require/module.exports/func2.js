const sum = (x, y) => x + y;
const square = x => x * x;

// module.exports
// - 함수 여러 개를 객체 '하나'로 내보낼 수도 있음
module.exports = {
  sum,
  square
};