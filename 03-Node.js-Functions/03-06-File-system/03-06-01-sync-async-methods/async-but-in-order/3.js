// # fs 모듈의 비동기 메서드 쓰되, 순서 유지 3
// - fs 모듈을 프로미스 형식으로 바꿔 async/await 사용

const fs = require('fs').promises;

async function readFilesInOrder() {
  try {
    console.log('Start~!');

    const data1 = await fs.readFile(`${__dirname}/readme2.txt`);
    console.log('First~!', data1.toString());

    const data2 = await fs.readFile(`${__dirname}/readme2.txt`);
    console.log('Second~!', data2.toString());

    const data3 = await fs.readFile(`${__dirname}/readme2.txt`);
    console.log('Thrid~!', data3.toString());

    console.log('End~!');
  } catch (err) {
    console.error(err);
  }
}

readFilesInOrder();

/*
Start~! // 순서 유지
First~! It's me!
Second~! It's me!
Thrid~! It's me!
End~!
*/