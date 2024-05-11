// # crypto 모듈: 단방향 암호화의 경우
// - pdkdf2 알고리즘 사용 예시
// - 기존 문자열에 salt 문자열을 붙이고 sha512 10만 번 반복 적용
// - randomBytes, pdkdf2 메서드는 멀티 스레딩으로 동작 -> 블로킹 X

const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log(`salt: ${salt}`);

  crypto.pbkdf2('パスワード', salt, 100000, 64, 'sha512', (err, key) => {
    console.log(`password: ${key.toString('base64')}`);
  });
});