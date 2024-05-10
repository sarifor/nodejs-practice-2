// # querystring
// - Q) search에도 쓸 수 있는가?
// - A) '?'가 키에 포함되어버리고, 문자열로 재조립했을 때 ? 부분이 이상해지는 문제점 있으므로 쓰면 안 될 듯함

const url = require('url');
const querystring = require('querystring');
const parsedURL = url.parse('https://developer.mozilla.org/ko/search?q=node.js&q=javascript');

// 자바스크립트 객체로 분해
const search = querystring.parse(parsedURL.search);
console.log(search); // [Object: null prototype] { '?q': 'node.js', q: 'javascript' }

// 문자열로 재조립
console.log(querystring.stringify(search)); // %3Fq=node.js&q=javascript