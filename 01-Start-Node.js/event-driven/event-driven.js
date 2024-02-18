function run() {
  console.log("Execute after 3 sec.")
}

console.log("Start");

setTimeout(run, 3000);

console.log("End");
/*
이벤트 루프는 호출 스택이 빌 때 콜백(run)을 호출 스택에 넣어줌:
Start
End
Execute after 3 sec.
*/