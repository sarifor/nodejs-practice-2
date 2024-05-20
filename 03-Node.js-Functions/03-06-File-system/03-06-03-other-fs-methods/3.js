// # 기타 fs 모듈 메서드
// - 예: 파일 복사
// - copyFile(): Asynchronously copies src to dest.

const fs = require('fs').promises;

fs.copyFile(`${__dirname}/readme4.txt`, `${__dirname}/writeme4.txt`)
  .then(() => {
    console.log('Copied');
  })
  .catch((error) => {
    console.log(error);
  });