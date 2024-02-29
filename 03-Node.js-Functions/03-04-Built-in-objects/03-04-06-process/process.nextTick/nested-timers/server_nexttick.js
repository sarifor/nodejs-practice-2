let start = Date.now();
let times = [];

function run() {
  times.push(Date.now() - start);

  if (start + 100 < Date.now()) {
    // 서버(process.nextTick 사용)
    // - 비동기 작업을 지연 없이 실행 가능
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