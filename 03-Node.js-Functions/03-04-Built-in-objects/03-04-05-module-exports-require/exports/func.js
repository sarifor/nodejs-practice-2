const sum = (x, y) => x + y;
const square = x => x * x;

// exports 객체
// - 모듈을 만들 때 module 객체 대신 사용할 수 있음
// - '여러 가지' 값을 내보내는 노드 모듈을 만들 때 exports 객체의 프로퍼티로 할당
exports.mean = data => data.reduce(sum)/data.length; // arr.reduce()
exports.stddev = function(d) {
  return square(d);
}