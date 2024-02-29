let start = Date.now();
let times = [];

setTimeout(function run() {
  // 이전 호출이 끝난 시점과 현재 호출이 시작된 시점의 시차를 기록
  times.push(Date.now() - start);

  if (start + 100 < Date.now())
    // 서버
    // - 브라우저와 같은 제약 없음
    // Node.js의 process.nextTick과 setImmediate를 이용하면 비동기 작업을 지연 없이 실행 가능
    console.log(times); // [1, 3, 19, 34, 50, 65, 81, 97, 113]
  else
    setTimeout(run);
});