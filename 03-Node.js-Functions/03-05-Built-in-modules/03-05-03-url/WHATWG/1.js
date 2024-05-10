// # url 모듈: WHATWG 방식의 url(노드 버전 7~)
// - search 부분 => searchParams 특수 객체

const url = require('url');
const { URL } = url;
const myURL = new URL('https://nodejs.org/docs/latest-v18.x/api/path.html#pathresolvepaths');

console.log(myURL);
/*
URL {
  href: 'https://nodejs.org/docs/latest-v18.x/api/path.html#pathresolvepaths',
  origin: 'https://nodejs.org', // exist only in WHATWG
  protocol: 'https:',
  username: '', // exist only in WHATWG
  password: '', // exist only in WHATWG
  host: 'nodejs.org', // exist only in WHATWG
  hostname: 'nodejs.org',
  port: '',
  pathname: '/docs/latest-v18.x/api/path.html',
  search: '',
  searchParams: URLSearchParams {}, // exist only in WHATWG
  hash: '#pathresolvepaths'
}
*/

// - Returns a formatted URL string derived fromurlObject
console.log(url.format(myURL));