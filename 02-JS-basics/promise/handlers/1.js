// # Promise
// - 작업이 성공적으로 처리됨 -> then 메서드로 받음
// - 작업에 에러 발생함 ->  catch 메서드로 받음
// - 프라미스가 이행이든 거부든 실행됨 -> finally 메서드 실행

const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) { // If true, resolve.
    resolve('Success');
  } else { // If false, reject.
    reject('Fail');
  }
});

promise
  .then((message) => { // resolve에서 전달된 'Success' 메시지
    console.log(message);
  })
  .catch((error) => { // reject에서 전달된 'Fail' 메시지
    console.log(error);
  })
  .finally(() => { // Always execute
    console.log('Final');
  });