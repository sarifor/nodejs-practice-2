// # Stream
// - 예: 152MB 텍스트 파일 생성

const fs = require('fs');
const file = fs.createWriteStream(`${__dirname}/big.txt`);

for (let i = 0; i <= 10000000; i++) {
  file.write('Let\'s gooooooo!\n');
}

file.end();