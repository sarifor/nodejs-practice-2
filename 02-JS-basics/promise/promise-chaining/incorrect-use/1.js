// # 프라미스 체이닝
// - 한 프라미스에 여러 개의 핸들러 등록해 사용하면 안 됨

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  console.log(result); // 1
  return result * 2;
});

promise.then(function(result) {
  console.log(result); // 1
  return result * 2;
});