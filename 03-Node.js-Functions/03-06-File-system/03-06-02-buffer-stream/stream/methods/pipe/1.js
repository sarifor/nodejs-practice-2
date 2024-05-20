// # Stream
// - 스트림끼리 연결: pipe()

const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/readme3.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/writeme3.txt`);
readStream.pipe(writeStream); // readStream -> pipe -> writeStream