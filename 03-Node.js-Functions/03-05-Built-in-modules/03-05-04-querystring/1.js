// querystring
// - (기존 노드 방식 url의) query를 parse할 때 사용
// - query를 추출하기 위해, searchParams에 비하여 url 모듈에 querystring 모듈을 한 번 더 사용해야 하는 "번거로움이 있음"
const url = require('url');
const querystring = require('querystring');
const parsedURL = url.parse('https://developer.mozilla.org/ko/search?q=node.js&q=javascript');
const query = querystring.parse(parsedURL.query);

console.log(query); // [Object: null prototype] { q: [ 'node.js', 'javascript' ] }
console.log(querystring.stringify(query)); // q=node.js&q=javascript