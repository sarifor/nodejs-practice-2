function first() {
  second();
  console.log("First func");
}

function second() {
  third();
  console.log("Second func");
}

function third() {
  console.log("Thrid func");
}

first();
/*
호출 순서와 반대 순서로 실행:
Thrid func
Second func
First func */