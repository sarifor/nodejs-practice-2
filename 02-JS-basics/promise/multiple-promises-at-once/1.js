// # 여러 프로미스 동시 처리
// - Promise.all 사용

// 즉시 resolve하는 프로미스를 만드는 방법
const promise1 = Promise.resolve('Success 1');
const promise2 = Promise.resolve('Success 2');

// 프로미스 여러 개를 한 번에 실행 
// - 모든 프로미스가 resolve될 때까지 기다렸다가 then으로 넘어감
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // [ 'Success 1', 'Success 2' ]
  })
  .catch((error) => {
    console.log(error);
  });