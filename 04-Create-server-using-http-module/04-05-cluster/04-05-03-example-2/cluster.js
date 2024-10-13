// # 서버 클러스터링
// - 코어 개수만큼 워커 프로세스 생성
// - localhost:8888에 접속할 때마다 워커 프로세스가 HTTP 서버를 실행하여 요청을 처리하고 1초 후 종료됨
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Number of CPUs: ${numCPUs}`);
  console.log(`Master: ${process.pid}`);
  
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} is ended!`);
  })
} else {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Testing cluster module!</h1>');
    res.end('<h1>Bye!</h1>');

    setTimeout(() => {
      process.exit(1);
    }, 1000);
  }).listen(8888);
  console.log(`Worker: ${process.pid}`);
}
