// # worker_threads 모듈
// - 예: 메인 스레드와 워커 스레드 간의 통신

const {
  Worker, isMainThread, parentPort,  
} = require('worker_threads');

if (isMainThread) { // 기존에 동작하던 싱글 스레드(메인 스레드, 부모 스레드)라면
  const worker = new Worker(__filename); // 워커 스레드를 생성하고
  worker.on('message', message => console.log(`from worker: ${message}`)); // from worker: pong
  worker.on('exit', () => console.log('worker exit')); // worker exit
  worker.postMessage('ping'); // 워커 스레드에게 메시지를 보냄
} else { // 워커 스레드라면
  parentPort.on('message', (value) => { // 메인 스레드로부터 메시지를 받고
    console.log(`from parent: ${value}`); // from parent: ping
    parentPort.postMessage('pong'); // 부모 스레드에게 메시지를 보내고
    parentPort.close(); // 스레드 닫음  // 워커에서 on 메서드 사용할 때는 직접 워커 종료해야 함
  });
}