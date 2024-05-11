// # util 모듈
// - deprecate(): 함수가 deprecated 처리되었음을 알림
// - promisify(): 콜백 패턴 => 프로미스 패턴

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y); // 9
}, 'Please do not use this function because this is deprecated');
dontUseMe(4, 5);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(4)
  .then((buf) => {
    console.log(buf.toString('base64')); // aI4icQ==  // 랜덤한 결과
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(
    console.log('End!') // End!
  );
