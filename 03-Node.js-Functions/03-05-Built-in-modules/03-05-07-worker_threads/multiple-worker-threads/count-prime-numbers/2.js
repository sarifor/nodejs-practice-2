// # worker_threads 모듈
// - 예: 2 ~ 100만까지의 숫자 중 소수가 모두 몇 개 있는지 알아내기 (워커 스레드 사용, 3판 코드)
// - 스레드를 쓰지 않을 때보다 계산 결과가 더 빨리 나옴

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const min = 2;
let primes = [];

function findPrimes(start, range) { // 소수 판별
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

if (isMainThread) { // 메인 스레드일 때
  const max = 1000000;
  const threadCount = 8;
  const threads = new Set();
  const range = Math.floor((max - min) / threadCount);
  let start = min;

  console.time('prime');

  for (let i = 0; i < threadCount - 1; i++) { // 여덟 개 스레드에게 일정 범위씩 분담시킴
    const wStart = start;
    threads.add(new Worker(__filename, { workerData: { start: wStart, range } }));
    start += range;
  }
  threads.add(new Worker(__filename, { workerData: { start, range: max - start } }));

  for (let worker of threads) {
    worker.on('error', (err) => {
      throw err;
    });
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.timeEnd('prime'); // prime: 392.708ms // 매번 조금씩 다름
        console.log(`2 ~ 100만까지의 숫자 중 소수는 모두 ${primes.length}개`); // 2 ~ 100만까지의 숫자 중 소수는 모두 78498개
      }
    });
    worker.on('message', (msg) => {
      primes = primes.concat(msg);
    });
  }
} else { // 워커 스레드일 때
  findPrimes(workerData.start, workerData.range);
  parentPort.postMessage(primes);
}