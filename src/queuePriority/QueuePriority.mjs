export class QueueElement {

	constructor(element, priority) {
		this.element = element;
		this.priority = priority;
	}

}

export class QueuePriority {
	/**
	 *
	 * @type {QueueElement[]}
	 */
	#items = [];

	/**
	 * Add new item in queue.
	 *
	 * @param element
	 * @param priority
	 */
	enqueue(element, priority) {
		let added = false;
		const queue = new QueueElement(element, priority);
		for (const [key, value] of this.#items.entries()) {
			if (queue.priority < value.priority) {
				this.#items.splice(key, 0, queue);
				added = true;
				break;
			}
		}
		if (!added) {
			this.#items.push(queue);
		}
	}

	/**
	 * Remove item from queue.
	 */
	dequeue() {
		this.#items.shift();
	}

	/**
	 * Return first item in queue.
	 *
	 * @returns {*}
	 */
	front() {
		return this.#items[0];
	}

	/**
	 * Return last item in queue.
	 *
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.#items.length === 0;
	}

	/**
	 * Clear all items in queue.
	 */
	clear() {
		this.#items = [];
	}

	/**
	 * Return size of queue.
	 *
	 * @returns {number}
	 */
	size() {
		return this.#items.length;
	}

	/**
	 * Print queue.
	 */
	print() {
		console.log(this.#items);
	}

}
