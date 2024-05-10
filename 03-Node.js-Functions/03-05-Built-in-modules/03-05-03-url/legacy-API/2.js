// # url 모듈: 기존 node 방식의 url
// - search: 물음표 포함
// - query: 물음표 포함 X

const url = require('url');
const parsedURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(parsedURL.search); // ?query=string
console.log(parsedURL.query); // query=string