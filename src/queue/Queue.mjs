export class Queue {
	/**
	 *
	 * @type {[]}
	 */
	#items = [];

	/**
	 * Add new item in queue.
	 *
	 * @param element
	 */
	enqueue(element) {
		this.#items.push(element);
	}

	/**
	 * Remove item from queue.
	 */
	dequeue() {
		return this.#items.shift();
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
	 * Return if queue is empty.
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
