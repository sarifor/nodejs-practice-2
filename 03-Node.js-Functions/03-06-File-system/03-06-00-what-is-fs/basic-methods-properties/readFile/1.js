// # fs 모듈의 readFile 메서드
// - 용도: 파일 읽기
// - 결과물: Buffer 형식

const fs = require('fs');

fs.readFile(`${__dirname}/readme1.txt`, (err, data) => { // 파일을 읽은 후에 실행될 콜백 함수
  if (err) {
    throw err;
  }
  console.log(data); // <Buffer 43 6f 70 65 72 6e 69 63 75 73 21 20 53 61 76 65 20 6d 65 21>
  console.log(data.toString()); // Copernicus! Save me!  // 문자열 형식 by toString 메서드
});