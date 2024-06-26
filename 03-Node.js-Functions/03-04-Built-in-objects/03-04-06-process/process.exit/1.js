// # process.exit(코드): 예시 1
// - 실행 중인 노드 프로세스를 종료
// - 코드 인수를 주지 않거나 0을 줌 -> 정상 종료 뜻함
// - 코드 인수에 1을 줌 -> 비정상 종료 뜻함
// - 서버에선 잘 사용하지 않음. 이 함수를 사용하면 서버가 멈추기 때문
// - 서버 외의 독립적인 프로그램에선 수동으로 노드를 멈추기 위해 사용

let i = 1;

setInterval(() => {
  if (i === 5) {
    console.log("End");
    process.exit(); // 코드 인수를 주지 않음
  }
  console.log(i);
  i += 1;
}, 1000);