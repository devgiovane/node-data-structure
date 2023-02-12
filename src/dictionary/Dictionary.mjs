export class Dictionary {
	/**
	 *
	 * @type {Object}
	 */
	#items = {};

	/**
	 * Set item in dict.
	 *
	 * @param key
	 * @param value
	 */
	set(key, value) {
		this.#items[key] = value;
	}

	/**
	 * Delete item in dict.
	 *
	 * @param key
	 */
	delete(key) {
		if (!this.has(key)) {
			return false;
		}
		delete this.#items[key];
		return true;
	}

	/**
	 *  Verify if item exists in set.
	 *
	 * @param key
	 */
	has(key) {
		return this.#items.hasOwnProperty(key);
	}

	/**
	 * Get item in dict.
	 *
	 * @param key
	 * @returns {*}
	 */
	get(key) {
		return this.has(key) ? this.#items[key] : undefined;
	}

	/**
	 * Clear all items dict.
	 */
	clear() {
		this.#items = {};
	}

	/**
	 * Get size of items dict.
	 */
	size() {
		return Object.keys(this.#items).length;
	}

	/**
	 * Get all keys in dict.
	 */
	keys() {
		return Object.keys(this.#items);
	}

	/**
	 * Get all values in dict.
	 */
	values() {
		return Object.values(this.#items);
	}

	/**
	 * Print Dictionary
	 */
	toString() {
		console.log(this.#items);
	}
}
