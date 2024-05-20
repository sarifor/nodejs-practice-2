// # 기타 fs 모듈 메서드
// - 예: 특정 파일 삭제하고, 특정 폴더 삭제
// - readdir(): 폴더 안의 내용물 확인
// - unlink(): 파일 지움
// - rmdir(): 폴더 지움

const fs = require('fs').promises;

fs.readdir(`${__dirname}/folder`)
  .then((dir) => {
    console.log('Check folder inside: ', dir); // Check folder inside:  [ 'newFile.js' ]
    return fs.unlink(`${__dirname}/folder/newfile.js`);
  })
  .then(() => {
    console.log('File is successfully deleted!');
    return fs.rmdir(`${__dirname}/folder`);
  })
  .then(() => {
    console.log('Folder is successfuly deleted!');
  })
  .catch((err) => {
    console.log(err);
  });