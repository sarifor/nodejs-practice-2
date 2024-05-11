// # child_process 모듈
// - exec 메서드

const exec = require('child_process').exec;

const process = exec('dir', { encoding: 'Shift_JIS' }); // Q. 일어 깨지는데 어떻게 해결?

process.stdout.on('data', function(data) {
  console.log(data.toString());
});

process.stderr.on('data', function(data) {
  console.error(data.toString());
})