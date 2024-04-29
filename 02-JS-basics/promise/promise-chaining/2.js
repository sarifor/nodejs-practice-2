// # 프라미스 체이닝
// - 가능한 이유: promise.then 호출 시 프라미스가 반환되기 때문

const proObj1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);  
})

const proObj2 = proObj1.then(function(result) {
  console.log(result); // 1
  return result * 2;
 })

console.log(proObj2 instanceof Promise); // true  // promise.then이 Promise 반환