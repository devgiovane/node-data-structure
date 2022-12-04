import { QueuePriority } from './QueuePriority.mjs';

const queue = new QueuePriority();
queue.enqueue(1, 2);
queue.enqueue(2, 2);
queue.enqueue(3, 1);
queue.enqueue(4, 1);
queue.enqueue(5, 1);
queue.print();
queue.dequeue();
console.log(queue.size());
console.log(queue.isEmpty());
queue.print();
queue.clear();
console.log(queue.isEmpty());
