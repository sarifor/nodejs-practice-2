// # child_process 모듈
// - spawn 메서드

const spawn = require('child_process').spawn;
const path = require('path');

const pythonCodePath = path.join(__dirname, 'pythonCode.py');
const process = spawn('python', [pythonCodePath]);

process.stdout.on('data', function(data) {
  console.log(data.toString());
});

process.stderr.on('data', function(data) {
  console.error(data.toString());
});