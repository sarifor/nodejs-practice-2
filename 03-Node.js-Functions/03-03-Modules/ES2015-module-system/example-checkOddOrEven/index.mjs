import { odd, even } from './var.js';
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 1
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));