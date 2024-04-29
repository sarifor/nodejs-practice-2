// # 프라미스 체이닝
// - result가 핸들러 체인을 따라 전달

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);  
}).then(function(result) {
  console.log(result); // 1
  return result * 2;
}).then(function(result) {
  console.log(result); // 2
  return result * 2;
})