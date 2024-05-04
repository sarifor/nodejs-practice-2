// # Timers: setImmediate vs. setTimeout(콜백, 0)
// - 특수한 경우에 setImmediate는 setTimeout(콜백, 0)보다 먼저 실행됨
// - 하지만 setImmediate가 항상 setTimeout(콜백, 0)보다 먼저 호출되는 것은 아님
// - setTimeout(콜백, 0)은 사용하지 않는 것을 권장함
// - 아래 예시 실행 결과: setTimeout(콜백, 0)이 먼저 실행될 때가 있는가 하면 setImmediate이 먼저 실행될 때도 있음

for (let i = 0; i < 30; i++) {
  setTimeout(() => {
    console.log("Execute ASAP");
  }, 0);
  
  setImmediate(() => {
    console.log("Execute right now");
  });
}