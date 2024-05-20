// # fs 모듈의 비동기 메서드 readFile()
// - 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어감
// - 수백 개의 I/O 요청이 들어와도 메인 스레드는 백그라운드에 요청 처리 위임

const fs = require('fs');

console.log('Start');

fs.readFile(`${__dirname}/readme2.txt`, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('One', data.toString());
});

fs.readFile(`${__dirname}/readme2.txt`, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('Two', data.toString());
});

fs.readFile(`${__dirname}/readme2.txt`, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('Three', data.toString());
});

console.log('End');

/*
Start
End
Two It's me! // 이하 3줄은 반복 실행할 때마다 순서 달라짐
Three It's me!
One It's me!
*/