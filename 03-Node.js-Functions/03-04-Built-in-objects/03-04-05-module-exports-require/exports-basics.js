// module.exports vs. exports
// - 같은 객체를 참조
// - 참조 관계가 있으므로 한 모듈에 둘을 동시에 사용하지 않는 것이 좋음
console.log(module.exports === exports); // true