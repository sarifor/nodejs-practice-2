// # 비동기 작업: 서버에서 process.nextTick() 사용하는 경우
// - 다른 I/O 작업이나 타이머 기반 비동기 작업들보다 우선 실행되도록 만들어, 작업 실행 사이의 지연을 최소화

let start = Date.now();
let times = [];

function run() {
  times.push(Date.now() - start);

  if (start + 100 < Date.now()) {
    console.log(times);
    /* [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2,
      2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      4, 4, 4, 4,
      ... 70195 more items
    ] */     
  } else {
    process.nextTick(run);
  }
}

process.nextTick(run);