import { Dictionary } from './Dictionary.mjs';

const dict = new Dictionary();
dict.set('A', 'apple');
dict.set('G', 'google');
dict.set('M', 'microsoft');
console.log(dict.has('A'));
console.log(dict.size());
console.log(dict.get('G'));
console.log(dict.values());
