// # this in 일반 함수 2, 일반 함수 1, 객체
// - 일반 함수 1의 this -> group 객체
// - 일반 함수 2의 this -> ** global 객체 **

let group = {
  title: "Groul 1",
  students: ["Tanaka"],
  showList() { // 일반 함수 1
    console.log(this === group); // true
    this.students.forEach(function(student) { // 일반 함수 2
      console.log(this === global); // true
    });
  }
};

group.showList();