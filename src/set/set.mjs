export class Set {

	#items = {};

	/**
	 * Add unique item in set.
	 *
	 * @param value
	 * @returns {boolean}
	 */
	add(value) {
		if (this.has(value)) {
			return false;
		}
		this.#items[value] = value;
		return true;
	}

	/**
	 * Remove unique item in set.
	 *
	 * @param value
	 * @returns {boolean}
	 */
	delete(value) {
		if (!this.has(value)) {
			return false;
		}
		delete this.#items[value];
		return true;
	}

	/**
	 * Verify if item exists in set.
	 *
	 * @param value
	 * @returns {boolean}
	 */
	has(value) {
		return this.#items.hasOwnProperty(value);
	}

	/**
	 * Clear set.
	 */
	clear() {
		this.#items = {};
	}

	/**
	 * Size of set,
	 *
	 * @returns {number}
	 */
	size() {
		return Object.keys(this.#items).length;
	}

	/**
	 * Values of set.
	 *
	 * @returns {[]}
	 */
	values() {
		return Object.values(this.#items);
	}

	/**
	 * Union
	 *
	 * @param other
	 * @returns {Set}
	 */
	unions(other) {
		const union = new Set();
		let values = this.values();
		for (let value of values) {
			union.add(value);
		}
		values = other.values();
		for (let value of values) {
			union.add(value);
		}
		return union;
	}

	/**
	 * Intersection
	 *
	 * @param other
	 * @returns {Set}
	 */
	intersection(other) {
		const intersection = new Set();
		let values = this.values();
		for (let value of values) {
			if (other.has(value)) {
				intersection.add(value);
			}
		}
		return intersection;
	}

	/**
	 * Intersection
	 *
	 * @param other
	 * @returns {Set}
	 */
	difference(other) {
		const difference = new Set();
		let values = this.values();
		for (let value of values) {
			if (!other.has(value)) {
				difference.add(value);
			}
		}
		return difference;
	}

	/**
	 * Sub set.
	 *
	 * @param other
	 * @returns {boolean}
	 */
	subset(other) {
		if (this.size() > other.size()) {
			return false;
		}
		let values = this.values();
		for (let value of values) {
			if (!other.has(value)) {
				return false;
			}
		}
		return true;
	}
}
