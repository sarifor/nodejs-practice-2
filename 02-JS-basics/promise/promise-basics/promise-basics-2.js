const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success');
  } else {
    reject('Fail');
  }
});

promise
  .then((message) => {
    return new Promise((resolve, reject) => { // resolve해서 new Promise로 리턴하면, 다음 then으로 넘길 수 있음.
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.error(error);
  });