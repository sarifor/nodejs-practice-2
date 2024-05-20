// # 기타 fs 모듈 메서드
// - 예: 폴더 만들고, 파일 만들고, 파일 이름 변경
// - access(): 폴더/파일 접근 가능 여부 체크
// - mkdir(): 폴더 만듦
// - open(): (파일이 없으면 만들고) 파일의 아이디(fd 변수) 가져옴
// - rename(): 파일 이름 변경

const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access(`${__dirname}/folder`, constants.F_OK | constants.W_OK | constants.R_OK) // Q. 넘겨진 상수는 어디로?
  .then(() => {
    return Promise.reject('Folder already exists');
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      console.log('No Folder');
      return fs.mkdir(`${__dirname}/folder`);
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log('New folder is created!');
    return fs.open(`${__dirname}/folder/file.js`, 'w');
  })
  .then((fd) =>  {// fs.open()이 리턴한 fileHandle 객체
    console.log('Empty file is created!', fd);
    return fs.rename(`${__dirname}/folder/file.js`, `${__dirname}/folder/newFile.js`);
  })
  .then(() => {
    console.log('Changing name is succeeded!');
  })
  .catch((err) => {
    console.error(err);
  });