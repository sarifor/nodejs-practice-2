// # url 모듈: WHATWG 방식의 url(노드 버전 7~)
// - search 부분 => searchParams 특수 객체
// - searchParams: search 부분을 조작하는 다양한 메서드 제공

const { URL } = require('url');
const myURL = new URL('https://developer.mozilla.org/ko/search?q=node.js&q=javascript');

// searchParams 객체
console.log(myURL.searchParams); // URLSearchParams { 'q' => 'node.js', 'q' => 'javascript' }

// getAll: 키에 해당하는 모든 값을 가져옴
console.log(myURL.searchParams.getAll('q')); // [ 'node.js', 'javascript' ]

// get: 키에 해당하는 첫 번째 값만 가져옴
console.log(myURL.searchParams.get('q')); // node.js

// has: 해당 키가 있는지 없는지 검사
console.log(myURL.searchParams.has('property')); // false

// keys: searchParams의 모든 키를 iterator(반복기) 객체로 가져옴
console.log(myURL.searchParams.keys()); // URLSearchParams Iterator { 'q', 'q' }

// values: searchParams의 모든 값을 iterator 객체로 가져옴
console.log(myURL.searchParams.values()); // URLSearchParams Iterator { 'node.js', 'javascript' }

// append: 해당 키 추가
myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter')); // [ 'es3', 'es5' ]

// set: 같은 키의 값들을 모두 지우고 새로 추가
myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter')); // [ 'es6' ]

// delete: 해당 키를 제거
myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter')); // []

// toString: 조작한 searchParams 객체를 다시 문자열로 만듦
console.log(myURL.searchParams.toString()); // q=node.js&q=javascript
console.log(myURL.search); // ?q=node.js&q=javascript
myURL.search = myURL.searchParams.toString();
console.log(myURL.search); // ?q=node.js&q=javascript