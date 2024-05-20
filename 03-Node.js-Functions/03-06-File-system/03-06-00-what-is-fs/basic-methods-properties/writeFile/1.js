// # fs 모듈의 writeFile 메서드
// - 파일 만듦

const fs = require('fs').promises;
let randomNum = Math.random();

fs.writeFile(`${__dirname}/writeme.txt`, `This sentence is written using fs.writeFile. Random number is ${randomNum}`)
  .then(() => {
    return fs.readFile(`${__dirname}/writeme.txt`);
  })
  .then((data) => {
    console.log(data.toString()); // This sentence is written using fs.writeFile. Random number is 0.2109465441258367  // 숫자는 매번 다름
  })
  .catch((err) => {
    console.error(err);
  });