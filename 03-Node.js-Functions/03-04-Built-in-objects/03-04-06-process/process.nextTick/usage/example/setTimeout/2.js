// # 비동기 작업: 서버에서 setTimeout을 사용하는 경우
// - 브라우저와 달리 'HTML 표준의 중첩 타이머 실행 간격 관련 제약' 없음

let start = Date.now();
let times = [];

setTimeout(function run() {
  // 이전 호출이 끝난 시점과 현재 호출이 시작된 시점의 시차를 기록
  times.push(Date.now() - start);

  if (start + 100 < Date.now())
    console.log(times); // [1, 3, 19, 34, 50, 65, 81, 97, 113]
  else
    setTimeout(run);
});