// # Stream
// - 예: 152MB 텍스트 파일 복사 (스트림 사용 X)
// - readFileSync(), writeFileSync() 사용

const fs = require('fs');

console.log('before: ', process.memoryUsage().rss/1024/1024, 'MB'); // before:  28.9453125 MB

const data1 = fs.readFileSync(`${__dirname}/../big.txt`);
fs.writeFileSync(`${__dirname}/big2.txt`, data1);

console.log('buffer: ', process.memoryUsage().rss/1024/1024, 'MB'); // buffer:  182.234375 MB  // 메모리에 파일이 모두 올라감