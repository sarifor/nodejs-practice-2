const fs = require('fs').promises;
const path = require('path');

// 예: 로그 파일에서 'ERROR' 키워드를 찾아 새로운 파일로 저장
// - fs.readFile의 결과가 버퍼가 아닌 이유: 인코딩 옵션을 utf8로 설정했기 때문
async function processLogFile() {
  try {
    const logFilePath = path.join(__dirname, 'server.log');
    const logData = await fs.readFile(logFilePath, 'utf8');
    // const logData = await fs.readFile(logFilePath);
    console.log(logData);

    const errorLogs = logData.split('\n').filter(line => line.includes('ERROR'));

    const outputFilePath = path.join(__dirname, 'error_logs.txt');
    await fs.writeFile(outputFilePath, errorLogs.join('\n'));
    console.log('Error logs save to error_logs.txt');
  } catch (err) {
    console.error('Failed to process log file: ', err);
  }
}

processLogFile();