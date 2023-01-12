import { Tree } from './Tree.mjs';

const tree = new Tree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
console.log(tree.search(11));
tree.inOrderTraverse(function (value) {
	console.log(value);
});
