class Node {

	constructor(element) {
		this.element = element;
		this.next = null;
	}

}

export class LinkedList {
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
	 * Return head item in linkedList.
	 *
	 * @returns {Node|null}
	 */
	getHead() {
		return this.#head;
	}

	/**
	 * Push in linkedList.
	 *
	 * @param element
	 */
	append(element) {
		let node = new Node(element);
		if (this.#head === null) {
			this.#head = node;
		} else {
			let current = this.#head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.#length++;
	}

	/**
	 * Insert at position in linkedList.
	 *
	 * @param position
	 * @param element
	 */
	insert(position, element) {
		if (position >= 0 && position <= this.#length) {
			let node = new Node(element);
			let current = this.#head;
			if (position === 0) {
				node.next = current;
				this.#head = node;
			} else {
				let index = 0;
				let previous;
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			this.#length++;
		}
	}

	/**
	 * Remove at position in linkedList.
	 *
	 * @param position
	 * @returns {null|*}
	 */
	removeAt(position) {
		if (position > -1 && position < this.#length) {
			let current = this.#head;
			if (position === 0) {
				this.#head = current.next;
			} else {
				let index = 0;
				let previous;
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			this.#length--;
			return current.element;
		}
		return null;
	}

	/**
	 * Remove element from linkedList.
	 *
	 * @param element
	 * @returns {null|*}
	 */
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	/**
	 * Return index of element in linkedList.
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
	 * Return if linkedList is empty.
	 *
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.#length === 0
	}

	/**
	 * Return size of linkedList.
	 *
	 * @returns {number}
	 */
	size() {
		return this.#length;
	}

	/**
	 * Clear all items in linkedList.
	 */
	clear() {
		this.#head = null;
		this.#length = 0;
	}

	/**
	 * Convert linkedList to string.
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
	 * Print linkedList.
	 */
	print() {
		console.log(this.#head);
	}

}
