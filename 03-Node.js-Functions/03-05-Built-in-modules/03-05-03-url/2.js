const { URL } = require('url');
const myURL = new URL('https://developer.mozilla.org/ko/search?q=node.js&q=javascript');

// myURL.searchParams
console.log(myURL.searchParams); // URLSearchParams { 'q' => 'node.js', 'q' => 'javascript' }

// - getAll: 키에 해당하는 모든 값을 가져옴
// - get: 키에 해당하는 첫 번째 값만 가져옴
// - has: 해당 키가 있는지 없는지 검사
// - keys: searchParams의 모든 키를 iterator(반복기) 객체로 가져옴
// - values: searchParams의 모든 값을 iterator 객체로 가져옴
console.log(myURL.searchParams.getAll('q')); // [ 'node.js', 'javascript' ]
console.log(myURL.searchParams.get('q')); // node.js
console.log(myURL.searchParams.has('property')); // false
console.log(myURL.searchParams.keys()); // URLSearchParams Iterator { 'q', 'q' }
console.log(myURL.searchParams.values()); // URLSearchParams Iterator { 'node.js', 'javascript' }

// - append: 해당 키 추가
myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter')); // [ 'es3', 'es5' ]

// - set: 같은 키의 값들을 모두 지우고 새로 추가
myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter')); // [ 'es6' ]

// - delete: 해당 키를 제거
myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter')); // []

// - toString: 조작한 searchParams 객체를 다시 문자열로 만듦
console.log(myURL.searchParams.toString()); // q=node.js&q=javascript
console.log(myURL.search); // ?q=node.js&q=javascript
myURL.search = myURL.searchParams.toString();
console.log(myURL.search); // ?q=node.js&q=javascript