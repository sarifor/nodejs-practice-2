// # crypto 모듈: 단방향 암호화의 경우
// - createHash 메서드 등을 사용

const crypto = require('crypto');

console.log("해시 알고리즘 달리해 보기");
console.log(crypto.createHash('sha512').update('パスワード').digest('base64')); // 4vjeYqkMHjA5y6Yq+3ZGQByl+9l+xO8/utpHUq6v0CLPp+r9oyDQiy32oKblXw1itZZwgXkgldfqr8WNAFMygw==
console.log(crypto.createHash('sha256').update('パスワード').digest('base64')); // 2LB2FIyTnZ0tbrYEWJacSGeUpMD88GMr5Y+lv20Vqvo=

console.log("인코딩 알고리즘 달리해 보기");
console.log(crypto.createHash('sha512').update('パスワード').digest('hex')); // e2f8de62a90c1e3039cba62afb7646401ca5fbd97ec4ef3fbada4752aeafd022cfa7eafda320d08b2df6a0a6e55f0d62b5967081792095d7eaafc58d00533283
console.log(crypto.createHash('sha512').update('パスワード').digest('latin1')); // bµpy ×ê¯ÅS2¥ûÙ~Äï?ºÚGR®¯Ð"Ï§êý£ Ð-ö ¦å_