// # child_process 모듈
// - exec 메서드

const exec = require('child_process').exec;

// 현재 디렉토리의 파일 및 폴더 목록을 UTF-8로 출력
// 참고: https://youtu.be/MCCC6umH-w8?si=7pNxRqYAwr22Y-XP&t=145
const process = exec('cmd /c chcp 65001>nul && dir');

process.stdout.on('data', function(data) {
  console.log(data.toString());
});

process.stderr.on('data', function(data) {
  console.error(data.toString());
})