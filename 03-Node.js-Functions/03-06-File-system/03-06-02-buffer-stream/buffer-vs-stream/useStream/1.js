// # Stream
// - 예: 152MB 텍스트 파일 복사 (스트림 사용)
// - createReadStream(), createWriteStream() 사용

const fs = require('fs');

console.log('before: ', process.memoryUsage().rss/1024/1024, 'MB'); // before:  28.8671875 MB

const readStream = fs.createReadStream(`${__dirname}/../big.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/bi2.txt`);

readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('stream: ', process.memoryUsage().rss/1024/1024, 'MB'); // stream:  43.1640625 MB  // 파일이 조각 나 작은 버퍼 단위로 옮겨짐
});