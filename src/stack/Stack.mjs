export class Stack {
	/**
	 *
	 * @type {[]}
	 */
	#items = [];

	/**
	 * Add new item in stack.
	 *
	 * @param element
	 */
	push(element) {
		this.#items.push(element);
	}

	/**
	 * Remove item from stack.
	 *
	 * @returns {*}
	 */
	pop() {
		return this.#items.pop();
	}

	/**
	 * Return last item in stack.
	 *
	 * @returns {*}
	 */
	peek() {
		return this.#items[this.#items.length - 1];
	}

	/**
	 * Return if stack is empty.
	 *
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.#items.length === 0;
	}

	/**
	 * Clear all items in stack.
	 */
	clear() {
		this.#items = [];
	}

	/**
	 * Return size of stack.
	 *
	 * @returns {number}
	 */
	size() {
		return this.#items.length;
	}


	/**
	 * Print stack.
	 */
	print() {
		console.log(this.#items);
	}

}
