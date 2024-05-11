// # crypto 모듈: 양방향 암호화의 경우
// - createCipheriv(알고리즘, 키, iv) for 암호화
// - createDecipheriv(알고리즘, 키, iv) for 복호화

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'ababababab1111222233223332331111'; // 32 Bytes 필수
const iv = '9876543212345678'; // 16 Bytes 필수


// 암호화
const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('I want to hide this sentence', 'utf8', 'base64');

result += cipher.final('base64');

console.log(result); // 3vd4VMkoXW4uwKnArbQ5CKPqXL8ETH1GnWdSfOA8234=


// 복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');

result2 += decipher.final('utf8');

console.log(result2); // I want to hide this sentence