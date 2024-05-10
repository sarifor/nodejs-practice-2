// # url 모듈: 기존 node 방식의 url
// - 주로 사용하는 메서드: parse(주소), format(객체)

const url = require('url');
const parsedURL = url.parse('https://nodejs.org/docs/latest-v18.x/api/path.html#pathresolvepaths');

console.log(parsedURL);
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'nodejs.org',
  port: null,
  hostname: 'nodejs.org',
  hash: '#pathresolvepaths',
  search: null,
  query: null,
  pathname: '/docs/latest-v18.x/api/path.html',
  path: '/docs/latest-v18.x/api/path.html',
  href: 'https://nodejs.org/docs/latest-v18.x/api/path.html#pathresolvepaths'
}
*/

// Returns a formatted URL string derived fromurlObject
console.log(url.format(parsedURL));