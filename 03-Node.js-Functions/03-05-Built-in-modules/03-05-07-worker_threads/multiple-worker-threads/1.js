// # worker_threads 모듈
// - 예: 여러 개의 워커 스레드에 데이터 넘겨보기

const {
  Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) { // 부모 스레드일 때
  const threads = new Set();
  threads.add(new Worker(__filename, {
    workerData: { start: 1 },
  }));
  threads.add(new Worker(__filename, {
    workerData: { start: 2 },
  }));
  for (let worker of threads) {
    worker.on('message', message => console.log('from worker: ', message)); // from worker 101, from worker 102
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log('job done'); // job done
      }
    });
  }
} else { // 워커 스레드일 때
  const data = workerData;
  parentPort.postMessage(data.start + 100); // 데이터를 돌려주는 순간 워커가 종료되어 worker.on('exit' 실행)
}