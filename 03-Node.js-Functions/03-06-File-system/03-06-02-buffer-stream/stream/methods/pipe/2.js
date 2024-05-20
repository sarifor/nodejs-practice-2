// # Stream
// - 스트림끼리 여러 번 연결: pipe() 여러 번 사용

const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/readme3.txt`);
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream(`${__dirname}/readme4.txt.gz`);
readStream.pipe(zlibStream).pipe(writeStream); // 파일 읽고, gzip 압축하고, 파일로 써짐