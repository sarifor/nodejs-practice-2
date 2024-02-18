const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) { // If true, resolve.
    resolve('Success');
  } else { // If false, reject.
    reject('Fail');
  }
});

promise
  .then((message) => { // If resolve
    console.log(message);
  })
  .catch((error) => { // If reject
    console.log(error);
  })
  .finally(() => { // Always execute
    console.log('Final');
  });