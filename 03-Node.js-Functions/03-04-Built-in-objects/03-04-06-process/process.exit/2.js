// # process.exit(코드): 예시 2
// - 인수로 넣은 코드 번호는 다양한 외부 툴에서 사용됨  ex. 테스트

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('1을 입력하면 정상 종료, 그 외의 숫자를 입력하면 에러로 종료합니다. 숫자를 입력하세요: ', (answer) => {
  const num = parseInt(answer);

  if (num === 1) {
    console.log('정상 종료합니다.');
    process.exit(0); // 정상 종료임을 알림
  } else {
    console.log('비정상 종료합니다.');
    process.exit(1); // 비정상 종료임을 알림
  }
});