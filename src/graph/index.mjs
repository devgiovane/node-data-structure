import { Graph } from "./Graph.mjs";

let graph = new Graph();
let myVertices = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ];
myVertices.forEach(vertex => {
	graph.addVertex(vertex);
});
graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('c', 'd');
graph.addEdge('c', 'g');
graph.addEdge('d', 'g');
graph.addEdge('d', 'h');
graph.addEdge('b', 'e');
graph.addEdge('b', 'f');
graph.addEdge('e', 'i');

graph.toString();
console.log(" --- ");
graph.bfs('a', v => console.log(v));
console.log(" --- ");
graph.dfs(v => console.log(v));
