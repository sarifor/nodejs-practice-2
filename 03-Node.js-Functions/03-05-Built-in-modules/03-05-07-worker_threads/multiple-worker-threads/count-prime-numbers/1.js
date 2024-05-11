// # worker_threads 모듈
// - 예: 2 ~ 100만까지의 숫자 중 소수가 모두 몇 개 있는지 알아내기 (워커 스레드 사용 X)

const min = 2;
const max = 1000000;
const primes = [];

function findPrimes(start, range) {
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

console.time('prime');
findPrimes(min, max);
console.timeEnd('prime') // prime: 424.461ms  // 매번 조금씩 다름

console.log(`2 ~ 100만까지의 숫자 중 소수는 모두 ${primes.length}개`);