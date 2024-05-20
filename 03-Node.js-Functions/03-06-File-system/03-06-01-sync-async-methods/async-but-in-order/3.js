// # fs 모듈의 비동기 메서드 쓰되, 순서 유지 3
// - fs 모듈을 프로미스 형식으로 바꿔 async/await 사용

const fs = require('fs').promises;

async function readData(message) {
  try {
    const data = await fs.readFile(`${__dirname}/readme2.txt`)
    console.log(message, data.toString());
  } catch(err) {
    console.error(err);
  }
}

console.log('Start~!');

readData('First~!');
readData('Second~!');
readData('Third~!');

console.log('End~!');