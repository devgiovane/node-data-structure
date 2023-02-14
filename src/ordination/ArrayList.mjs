export class ArrayList {
	/**
	 *
	 * @type {[]}
	 */
	#array = [];

	/**
	 *
	 * @param item
	 */
	insert(item) {
		this.#array.push(item);
	}

	/**
	 *
	 */
	bubbleSort() {
		for (let i = 0; i < this.#array.length - 1; i++) {
			for (let j = 0; j < this.#array.length - 1; j++) {
				if (this.#array[j] > this.#array[j + 1]) {
					ArrayList.#swap(this.#array, j, j + 1);
				}
			}
		}
	}

	/**
	 *
	 */
	selectionSort() {
		let indexMinn;
		for (let i = 0; i < this.#array.length - 1; i++) {
			indexMinn = i;
			for (let j = i; j < this.#array.length; j++) {
				if (this.#array[indexMinn] > this.#array[j]) {
					indexMinn = j;
				}
			}
			if (i !== indexMinn) {
				ArrayList.#swap(this.#array, i, indexMinn);
			}
		}
	}

	/**
	 *
	 */
	insertionSort() {
		let j, temp;
		for (let i = 1; i < this.#array.length; i++) {
			j = i;
			temp = this.#array[i];
			while (j > 0 && this.#array[j - 1] > temp) {
				this.#array[j] = this.#array[j - 1];
				j--;
			}
			this.#array[j] = temp;
		}
	}

	/**
	 *
	 */
	mergeSort() {
		this.#array = this.#mergeSortRec(this.#array);
	}

	#mergeSortRec(array) {
		if (array.length === 1) {
			return array;
		}
		let mid = Math.floor(array.length / 2);
		let left = array.slice(0, mid);
		let right = array.slice(mid, array.length);
		return this.#merge(this.#mergeSortRec(left), this.#mergeSortRec(right));
	}

	#merge(left, right) {
		let result = [];
		let il = 0, ir = 0;
		while (il < left.length && ir < right.length) {
			if (left[il] < right[ir]) {
				result.push(left[il++]);
			} else {
				result.push(right[ir++]);
			}
		}
		while (il < left.length) {
			result.push(left[il++]);
		}
		while (ir < right.length) {
			result.push(right[ir++]);
		}
		return  result;
	}

	quickSort() {
		this.#quick(this.#array, 0, this.#array.length - 1);
	}

	#quick(array, left, right) {
		let index;
		if (array.length > 1) {
			index = this.#partition(array, left, right);
		}
		if (left< index - 1) {
			this.#quick(array, left, index - 1);
		}
		if (index < right) {
			this.#quick(array, index, right);
		}
	}

	#partition(array, left, right) {
		let pivot = array[Math.floor((right + left) / 2)];
		let i = left, j = right;
		while (i <= j) {
			while (array[i] < pivot) {
				i++;
			}
			while (array[j] > pivot) {
				j--;
			}
			if (i <= j) {
				ArrayList.#swap(array, i, j);
				i++;
				j--;
			}
		}
		return i;
	}

	static #swap(array, to, from) {
		let aux = array[to];
		array[to] = array[from];
		array[from] = aux;
	}

	/**
	 * Print ArrayList
	 */
	toString() {
		console.log(this.#array.join());
	}
}
