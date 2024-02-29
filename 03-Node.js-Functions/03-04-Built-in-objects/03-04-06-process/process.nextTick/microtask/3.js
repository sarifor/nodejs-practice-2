// microtask가 실행되는 시점
// - 비동기 함수의 콜백 함수/이벤트 핸들러 -> 태스크 큐에 저장
// - 프로미스의 후속 처리 메서드의 콜백 함수 -> 마이크로태스크 큐에 저장 (여기)
// - 마이크로태스크 큐는 태스크 큐보다 우선순위가 높음
// - 따라서 2, 3, 1의 순서로 출력

setTimeout(() => console.log(1), 0); // 3rd

Promise.resolve()
  .then(() => console.log(2)) // 1st
  .then(() => console.log(3)); // 2nd