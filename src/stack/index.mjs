import { Stack } from './Stack.mjs';

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
stack.pop();
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();
stack.clear();
console.log(stack.isEmpty());
