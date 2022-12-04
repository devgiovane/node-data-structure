class Node {

	constructor(element) {
		this.element = element;
		this.next = null;
		this.previous = null;
	}

}

export class LinkedListDoubly {
	/**
	 *
	 * @type {number}
	 */
	#length = 0;
	/**
	 *
	 * @type {Node|null}
	 */
	#head = null;
	/**
	 *
	 * @type {Node|null}
	 */
	#tail = null;

	/**
	 * Push in linkedListDoubly.
	 *
	 * @param element
	 */
	append(element) {
		let node = new Node(element);
		if (this.#head === null) {
			this.#head = node;
			this.#tail = node;
		} else {
			let current = this.#head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
			node.previous = current;
			this.#tail = node;
		}
		this.#length++;
	}

	/**
	 * Insert at position in linkedListDoubly.
	 *
	 * @param position
	 * @param element
	 */
	insert(position, element) {
		if (position >= 0 && position <= this.#length) {
			let node = new Node(element);
			let current = this.#head;
			if (position === 0) {
				if (!this.#head) {
					this.#head = node;
					this.#tail = node;
				} else {
					node.next = current;
					current.previous = node;
					this.#head = node;
				}
			} else if (position === this.#length) {
				current = this.#tail;
				current.next = node;
				node.previous = current;
				this.#tail = node;
			}  else {
				let index = 0;
				let previous;
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
				current.previous = node;
				node.previous = previous;
			}
			this.#length++;
		}
	}

	/**
	 * Remove at position in linkedListDoubly.
	 *
	 * @param position
	 * @returns {null|*}
	 */
	removeAt(position) {
		if (position > -1 && position < this.#length) {
			let current = this.#head;
			if (position === 0) {
				this.#head = current.next;
				if (length === 1) {
					this.#tail = null;
				} else {
					this.#head.previous = null;
				}
			} else if (position === this.#length - 1) {
				current = this.#tail;
				this.#tail = current.previous;
				this.#tail.next = null;
			} else {
				let index = 0;
				let previous;
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.previous = previous;
			}
			this.#length--;
			return current.element;
		} else {
			return null;
		}
	}

	/**
	 * Remove element from linkedListDoubly.
	 *
	 * @param element
	 * @returns {null|*}
	 */
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	/**
	 * Return index of element in linkedListDoubly.
	 *
	 * @param element
	 * @returns {number}
	 */
	indexOf(element) {
		let index = 0;
		let current = this.#head;
		while (current) {
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}

	/**
	 * Return if linkedListDoubly is empty.
	 *
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.#length === 0
	}

	/**
	 * Return size of linkedListDoubly.
	 *
	 * @returns {number}
	 */
	size() {
		return this.#length;
	}

	/**
	 * Clear all items in linkedListDoubly.
	 */
	clear() {
		this.#head = null;
		this.#length = 0;
	}

	/**
	 * Convert linkedListDoubly to string.
	 *
	 * @returns {string}
	 */
	toString() {
		let current = this.#head;
		let string = '';
		while (current) {
			string += current.element + ' ';
			current = current.next;
		}
		return string;
	}

	/**
	 * Print linkedListDoubly.
	 */
	print() {
		console.log(this.#head);
	}

}
