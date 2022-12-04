import { LinkedList } from './LinkedList.mjs';

const linkedList = new LinkedList();
linkedList.append('Orange');
linkedList.append('Red');
linkedList.append('Blue');
console.log(linkedList.toString());
// linkedList.print();
linkedList.remove('Red');
console.log(linkedList.toString());
// linkedList.print();
linkedList.insert(1, 'Violet');
console.log(linkedList.toString());
// linkedList.print();
console.log(linkedList.size());
console.log(linkedList.isEmpty());
linkedList.clear();
console.log(linkedList.isEmpty());
