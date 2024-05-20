// # Stream
// - 파일 읽기: createReadStream()

const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/readme3.txt`, { highWaterMark: 4 }); // 4바이트씩 읽기
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  // console.log(chunk); // Buffer 객체 그대로 출력
  console.log(`data: ${chunk}, ${chunk.length}`); // Buffer 객체에 toString() 자동 적용  // 의도하지 않은 동작이므로 주의
});

readStream.on('end', () => {
  console.log(`end: ${Buffer.concat(data).toString()}`);
});

readStream.on('error', (err) => {
  console.log(`error: ${err}`);
})

/*
data: Node, 4
data: .js , 4
data: is s, 4
data: o co, 4
data: ol! , 4
data: Go-g, 4
data: o! I, 4
data: f yo, 4
data: u fe, 4
data: el t, 4
data: ired, 4
data: , ea, 4
data: t a , 4
data: cand, 4
data: y dr, 4
data: op!, 3
end: Node.js is so cool! Go-go! If you feel tired, eat a candy drop!
*/