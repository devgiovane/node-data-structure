import { Queue } from "../queue/Queue.mjs";
import { Dictionary } from "../dictionary/Dictionary.mjs";

export class Graph {
	/**
	 * @type {Array}
	 */
	#vertex = [];

	/**
	 * @type {Dictionary}
	 */
	#adjList = new Dictionary();

	/**
	 * Add vertex in Graph.
	 *
	 * @param v
	 */
	addVertex(v) {
		this.#vertex.push(v);
		this.#adjList.set(v, []);
	}

	/**
	 * Add edge in Graph.
	 *
	 * @param v
	 * @param w
	 */
	addEdge(v, w) {
		this.#adjList.get(v).push(w);
		this.#adjList.get(w).push(v);
	}

	/**
	 *
	 * @param v
	 * @param callback
	 */
	bfs(v, callback) {
		let color = this.#initializeColor();
		let queue = new Queue();
		queue.enqueue(v);
		while (!queue.isEmpty()) {
			let u = queue.dequeue();
			let neighbors = this.#adjList.get(u);
			color[u] = 'grey';
			neighbors.forEach(n => {
				if (color[n] === 'white') {
					color[n] = 'grey';
					queue.enqueue(n);
				}
			});
			color[u] = 'black';
			callback(u);
		}
	}

	/**
	 *
	 * @param callback
	 */
	dfs(callback) {
		let color = this.#initializeColor();
		this.#vertex.forEach(v => {
			if (color[v] === 'white') {
				this.#dfsVisit(v, color, callback);
			}
		});
	}

	/**
	 *
	 * @param v
	 * @param color
	 * @param callback
	 */
	#dfsVisit(v, color, callback) {
		color[v] = 'grey';
		callback(v);
		let neighbors = this.#adjList.get(v);
		neighbors.forEach(n => {
			if (color[n] === 'white') {
				this.#dfsVisit(n, color, callback);
			}
		});
		color[v] = 'black';
	}

	/**
	 *
	 * @returns {String[]}
	 */
	#initializeColor() {
		const colors = [];
		this.#vertex.forEach(v => {
			colors[v] = 'white';
		});
		return colors;
	}

	/**
	 * Print Graph
	 */
	toString() {
		console.log(this.#vertex);
		this.#adjList.toString();
	}

}
