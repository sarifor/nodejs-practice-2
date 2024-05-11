// # child_process 모듈
// - exec 메서드

const exec = require('child_process').exec;

const process = exec('cmd /c chcp 65001>nul && dir'); // UTF-8 인코딩으로 dir 실행

process.stdout.on('data', function(data) {
  console.log(data.toString());
});

process.stderr.on('data', function(data) {
  console.error(data.toString());
})