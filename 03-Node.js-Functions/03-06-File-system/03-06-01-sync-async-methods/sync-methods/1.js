// # fs 모듈의 동기 메서드 readFileSync()
// - 순서대로 출력하고 싶을 때 사용
// - 콜백 함수를 넣는 대신 직접 return 값 받아옴
// - 백그라운드 작업 중 메인 스레드는 아무것도 못하고 대기해야 한다는 단점 존재

const fs = require('fs');

console.log('Start!');

let data = fs.readFileSync(`${__dirname}/readme2.txt`);
console.log('First!', data.toString());

data = fs.readFileSync(`${__dirname}/readme2.txt`);
console.log('Second!', data.toString());

data = fs.readFileSync(`${__dirname}/readme2.txt`);
console.log('Three!', data.toString());

console.log('End!');

/*
Start! // 모든 행의 순서 유지됨
First! It's me!
Second! It's me!
Three! It's me!
End!
*/