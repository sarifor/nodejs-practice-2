// # this in 화살표 함수, 일반 함수, 객체
// - 일반 함수의 this -> group 객체
// - 화살표 함수의 this -> group 객체(=상위 스코프 this)

let group = {
  title: "Groul 1",
  students: ["Tanaka"],
  showList() { // 일반 함수
    console.log(this === group); // true
    this.students.forEach((student) => { // 화살표 함수
      console.log(this === global); // false
      console.log(this === group); // true
    });
  }
};

group.showList();