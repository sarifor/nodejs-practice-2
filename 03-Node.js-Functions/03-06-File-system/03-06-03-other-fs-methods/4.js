// # 기타 fs 모듈 메서드
// - 예: target.txt 변경 사항 감시
// - watch(): 파일/폴더의 변경 사항 감시

const fs = require('fs'); // promise 형식으로 변경하지 않음

fs.watch(`${__dirname}/target.txt`, (eventType, filename) => {
  console.log(eventType, filename);
});