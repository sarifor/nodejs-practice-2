// 예: 로그 파일에서 'ALERT' 필터링 후 저장
// - 로그 파일 읽기 by 스트림
// - 특정 키워드 포함된 줄을 모음 by 버퍼
// - 얻은 데이터를 파일에 씀 by 스트림
// - require('fs').promises 사용X: createReadStream, createWriteStream 지원하지 않기 때문
// - try/catch 불필요: 스트림 기반 함수는 이벤트로 에러 처리하기 때문

const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'server.log');
const keyword = 'ALERT';
const outputFilePath = path.join(__dirname, 'filtered_errors.log');

function filterLogByKeyword(logFilePath, keyword, outputFilePath) {
  const readStream = fs.createReadStream(logFilePath, { encoding: 'utf8' });
  const writeStream = fs.createWriteStream(outputFilePath);
  let buffer = '';
  let lines = '';

  readStream.on('data', (chunk) => {
    buffer += chunk;
    lines = buffer.split('\n');
    buffer = lines.pop();

    lines.forEach((line) => {
      if(line.includes(keyword)) {
        writeStream.write(line + '\n');
      }
    });  
  });


  readStream.on('end', () => {
    if (buffer.includes(keyword)) {
      writeStream.write(buffer + '\n');
    }
    console.log('Log filtering completed.');
  })

  readStream.on('error', (err) => {
    console.error('Error reading file: ', err);
  })

  writeStream.on('error', (err) => {
    console.error('Error writing file: ', err);
  })

}

filterLogByKeyword(logFilePath, keyword, outputFilePath);