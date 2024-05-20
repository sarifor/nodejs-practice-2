// # fs 모듈의 비동기 메서드 쓰되, 순서 유지
// - 이전 readFile의 콜백에 다음 readFile 넣기
// - -> 콜백 지옥

const fs = require('fs');

console.log('Start!!');

fs.readFile(`${__dirname}/readme2.txt`, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('First!', data.toString());

  fs.readFile(`${__dirname}/readme2.txt`, (err, data) => {
    if (err) {
      throw err;
    }
    console.log('Second!', data.toString());

    fs.readFile(`${__dirname}/readme2.txt`, (err, data) => {
      if (err) {
        throw err;
      }
      console.log('Third!', data.toString());      
      console.log('End!!');
    });
  });
});

/*
Start!! // 순서 유지
First! It's me!
Second! It's me!
Third! It's me!
End!!
*/