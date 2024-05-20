// # fs 모듈의 promises 속성
// - 콜백 형식 => 프로미스 형식

const fs = require('fs').promises;

fs.readFile(`${__dirname}/readme1.txt`)
  .then((data) => {
    console.log(data); // <Buffer 43 6f 70 65 72 6e 69 63 75 73 21 20 53 61 76 65 20 6d 65 21>
    console.log(data.toString()); // Copernicus! Save me!
  })
  .catch((err) => {
    console.error(err);
  });