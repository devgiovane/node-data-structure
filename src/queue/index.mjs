import { Queue } from './Queue.mjs';

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.dequeue();
console.log(queue.size());
console.log(queue.isEmpty());
queue.print();
queue.clear();
console.log(queue.isEmpty());
