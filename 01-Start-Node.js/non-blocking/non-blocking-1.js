function longRunningTask() {
  console.log("Done");
}

console.log("Start"); // Start, Done, Next // 코드가 쓰여진 순서대로 실행됨.
longRunningTask();
console.log("Next");