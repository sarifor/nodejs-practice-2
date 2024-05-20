// # Buffer
// - 버퍼를 직접 다룰 수 있는 클래스
// - 메서드: from(), toString(), concat(), alloc()

// from 메서드
const buffer = Buffer.from('Convert me into Buffer!');
console.log(buffer); // <Buffer 43 6f 6e 76 65 72 74 20 6d 65 20 69 6e 74 6f 20 42 75 66 66 65 72 21>
console.log(buffer.length); // 23

// toString 메서드
console.log(buffer.toString()); // Convert me into Buffer!

// concat 메서드
const array = [Buffer.from('Space '), Buffer.from('Space2 '), Buffer.from('End')];
const buffer2 = Buffer.concat(array);
console.log(buffer2.toString()); // Space Space2 End

// alloc 메서드
const buffer3 = Buffer.alloc(3);
console.log(buffer3); // <Buffer 00 00 00>