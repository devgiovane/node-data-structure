import { Queue } from './Queue.mjs';

function hotPotato(list, number) {
	const queue = new Queue();
	list.forEach(item => {
		queue.enqueue(item)
	});
	while (queue.size() > 1) {
		for (let i = 0; i < number; i++) {
			queue.enqueue(queue.dequeue());
		}
		const eliminated = queue.dequeue();
		console.log(`${eliminated} was eliminated`);
	}
	return queue.dequeue();
}

const names = [ 'Giovane', 'Rebeca', 'João', 'Gabriel', 'Andreia' ];
const winner = hotPotato(names, 8);
console.log(`${winner} winner`);
