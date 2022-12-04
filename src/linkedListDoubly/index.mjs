import { LinkedListDoubly } from './LinkedListDoubly.mjs';

const linkedListDoubly = new LinkedListDoubly();
linkedListDoubly.append('Orange');
linkedListDoubly.append('Red');
linkedListDoubly.append('Blue');
console.log(linkedListDoubly.toString())
linkedListDoubly.print()
linkedListDoubly.insert(2, 'Violet');
console.log(linkedListDoubly.toString());
linkedListDoubly.print();
console.log(linkedListDoubly.indexOf('Red'));
linkedListDoubly.remove('Red');
console.log(linkedListDoubly.toString());
linkedListDoubly.print();
