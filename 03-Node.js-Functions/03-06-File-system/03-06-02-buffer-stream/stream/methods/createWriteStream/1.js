// # Stream
// - 파일 쓰기: createWriteStream()

const fs = require('fs');

const writeStream = fs.createWriteStream(`${__dirname}/writeme2.txt`);
writeStream.on('finish', () => { // end 메서드가 호출되면
  console.log('Writing file completed');
});

writeStream.write('Wirte!\n');
writeStream.write('Again!');
writeStream.end();