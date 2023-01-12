class Node {
	left = null;
	right = null;

	constructor(key) {
		this.key = key;
	}
}

export class Tree {
	/**
	 *
	 * @type {Node|null}
	 */
	#root = null;

	/**
	 * Insert node in tree.
	 *
	 * @param key
	 */
	insert(key) {
		const newNode = new Node(key);
		if (!this.#root) {
			this.#root = newNode;
			return;
		}
		this.#insertNode(this.#root, newNode);
	}

	#insertNode(node, newNode) {
		if (newNode.key < node.key) {
			if (!node.left) {
				node.left = newNode;
			} else {
				this.#insertNode(node.left, newNode);
			}
		} else {
			if (!node.right) {
				node.right = newNode;
			} else {
				this.#insertNode(node.right, newNode);
			}
		}
	}

	/**
	 * Search key in tree.
	 *
	 * @param key
	 * @returns {*}
	 */
	search(key) {
		return this.#searchNode(this.#root, key);
	}

	#searchNode(node, key) {
		if (!node) return false;
		if (key < node.key) {
			return this.#searchNode(node.left, key);
		} else if (key > node.key) {
			return this.#searchNode(node.right, key);
		} else {
			return true;
		}
	}

	/**
	 * Remove node from tree.
	 *
	 * @param key
	 */
	remove(key) {
		this.#root = this.#removeNode(this.#root, key);
	}

	#removeNode(node, key) {
		if (!node) return null;
		if (key < node.key) {
			node.left = this.#removeNode(node.left, key);
			return node;
		} else if (key > node.key) {
			node.right = this.#removeNode(node.right, key);
			return node;
		} else {
			if (!node.left && !node.right) {
				node = null;
				return node;
			}
			if (!node.left) {
				node = node.right;
				return node;
			} else if (!node.right) {
				node = node.left;
				return node;
			}
			let aux = this.#minNode(node.right);
			node.key = aux.key;
			node.right = this.#removeNode(node.right, aux.key);
			return node;
		}
	}

	/**
	 * Return min value of tree.
	 *
	 * @returns {null|*}
	 */
	min() {
		const node = this.#minNode(this.#root);
		if (!node) {
			return null;
		}
		return node.key;
	}

	#minNode(node) {
		if (!node) {
			return null;
		}
		while (node && node.left) {
			node = node.left;
		}
		return node;
	}

	/**
	 * Return max value of
	 *
	 * @returns {null|*}
	 */
	max() {
		const node = this.#maxNode(this.#root);
		if (!node) {
			return null;
		}
		return node.key;
	}

	#maxNode(node) {
		if (!node) {
			return null;
		}
		while (node && node.right) {
			node = node.right;
		}
		return node;
	}

	/**
	 *
	 * @param callback
	 */
	inOrderTraverse(callback) {
		this.#inOrderTraverseNode(this.#root, callback);
	}

	#inOrderTraverseNode(node, callback) {
		if (node) {
			this.#inOrderTraverseNode(node.left, callback);
			callback(node.key);
			this.#inOrderTraverseNode(node.right, callback);
		}
	}

	/**
	 *
	 * @param callback
	 */
	preOrderTraverse(callback) {
		this.#preOrderTraverseNode(this.#root, callback);
	}

	#preOrderTraverseNode(node, callback) {
		if (node) {
			callback(node.key);
			this.#inOrderTraverseNode(node.left, callback);
			this.#inOrderTraverseNode(node.right, callback);
		}
	}

	/**
	 *
	 * @param callback
	 */
	postOrderTraverse(callback) {
		this.#postOrderTraverseNode(this.#root, callback);
	}

	#postOrderTraverseNode(node, callback) {
		if (node) {
			this.#inOrderTraverseNode(node.left, callback);
			this.#inOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

}
