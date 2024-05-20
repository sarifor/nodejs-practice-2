// # fs 모듈의 비동기 메서드 쓰되, 순서 유지 2
// - fs 모듈을 프로미스 형식으로 바꿔 then/catch 사용

const fs = require('fs').promises;

console.log('Start~!');

fs.readFile(`${__dirname}/readme2.txt`)
  .then((data) => {
    console.log('First~!', data.toString());
    return fs.readFile(`${__dirname}/readme2.txt`);
  })
  .then((data) => {
    console.log('Second~!', data.toString());
    return fs.readFile(`${__dirname}/readme2.txt`);
  })
  .then((data) => {
    console.log('Thrid~!', data.toString());
    console.log('End~!');
  })
  .catch((err) => {
    console.error(err);
  });

/*
Start~! // 순서 유지
First~! It's me!
Second~! It's me!
Thrid~! It's me!
End~!
*/