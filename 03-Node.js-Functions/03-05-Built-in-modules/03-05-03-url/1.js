const url = require('url');

// url.URL()
// - WHATWG의 url 형식
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


// url.parse()
// - 기존 node의 url 형식
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


// url.format()
// - returns a formatted URL string derived fromurlObject
console.log(url.format(myURL));
console.log(url.format(parsedURL));