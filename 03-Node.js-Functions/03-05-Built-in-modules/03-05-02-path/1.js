// # path 모듈
// - 폴더와 파일의 경로를 쉽게 조작하도록 도와줌

const path = require('path');

const string = __filename;

// 구분자
console.log('경로 구분자: ', path.sep); // \
console.log('환경 변수 구분자: ', path.delimiter); // ;


// 경로
console.log('파일의 폴더 경로: ', path.dirname(string)); // C:\(중략)\03-05-02-path


// 확장자
console.log('파일의 확장자: ', path.extname(string)); // .js


// 파일 이름
console.log('파일의 이름 표시(확장자 포함): ', path.basename(string)); // 1.js
console.log('파일의 이름 표시(확장자 제외):', path.basename(string, path.extname(string))); // 1


// 경로 편집
console.log('파일 경로를 root, dir, base, ext, name으로 분리', path.parse(string));
/*
  {
    root: 'C:\\',
    dir: 'C:\\(중략)\\nodejs-practice-2\\03-Node.js-Functions\\03-05-Built-in-modules\\03-05-02-path',
    base: '1.js',
    ext: '.js',
    name: '1'
  }
*/
console.log('path.parse()한 객체를 파일 경로로 합침: ', path.format({ // C:\notreal\abcd\path.js
  dir: 'C:\\notreal\\abcd',
  name: 'path',
  ext: '.js',
}));


// 경로 변환
console.log('정상적인 경로로 변환: ', path.normalize('C:\\\\notreal/path.js')); // C:\notreal\path.js


// 경로 판단
console.log('절대경로 or 상대경로 판별: ', path.isAbsolute('C:\\')); // true
console.log('첫 번째 경로에서 두 번째 경로로 가는 방법 알려줌: ', path.relative('C:\\notreal\abcd\\path.js', 'C:\\')); // ..\..


// 경로 합침
// - path.join(): \를 만나면 상대경로로 처리
// - path.resolve(): \를 만나면 절대경로로 처리. The given sequence of paths is processed from right to left, with each subsequent path prepended until an absolute path is constructed. 
console.log('여러 인수 넣으면 하나의 경로로 합침: ', path.join(__dirname, '..', '..', '/abcd', '.', '/1234')); // C:\(중략)\nodejs-practice-2\03-Node.js-Functions\abcd\1234
console.log('path.resolve(): ', path.resolve(__dirname, '..', 'abcd', '.', '/1234')); // C:\1234
console.log(path.join('/a', '/b', 'c')); // \a\b\c
console.log(path.resolve('/a', '/b', 'c')); // C:\b\c