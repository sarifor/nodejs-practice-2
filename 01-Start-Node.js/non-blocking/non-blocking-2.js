function longRunningTask() {
  console.log("Done");
}

// longRunningTask가 백그라운드로 넘겨짐으로(논 블로킹이 됨), 함수 실행 순서가 바뀜.
console.log("Start"); // Start, Next, Done
setTimeout(longRunningTask, 0);
console.log("Next");