// 객체에서 호출된 일반 함수가 this를 참조할 때
const temp = {
  checkThis: this,
  age: 10,
  tempFunc() { // 일반 함수는 호출된 객체(temp)를 this의 값으로 참조
    console.log(this);
    console.log(this.age);
  }
}

console.log(temp.checkThis); // {}
temp.tempFunc();
// { checkThis: {}, age: 10, tempFunc: [Function: tempFunc] }
// 10


// 객체에서 호출된 화살표 함수가 this를 참조할 때
const temp1 = {
  checkThis: this,
  age: 11,
  tempFunc: () => { // 화살표 함수는 상위 스코프(전역 객체)를 this의 값으로 참조
    console.log(this);
    console.log(this.age);
  }
}

console.log(temp1.checkThis); // {}
temp1.tempFunc();
// {}
// undefined