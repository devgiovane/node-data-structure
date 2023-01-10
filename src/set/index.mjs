import { Set } from './Set.mjs';

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
// console.log(set.size());
console.log('A', setA.values());
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
console.log('B', setB.values());

const union = setA.unions(setB);
console.log('union', union.values());

const intersection = setA.intersection(setB);
console.log('intersection', intersection.values());

const difference = setA.difference(setB);
console.log('difference', difference.values());

console.log('subset', setA.subset(setB));
