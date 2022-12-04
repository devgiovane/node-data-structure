import { Stack } from './Stack.mjs';

function decimalForBinary(number) {
	const stack = new Stack();
	let binary = '';
	while (number > 0) {
		const rest = Math.floor(number % 2);
		stack.push(rest);
		number = Math.floor(number / 2);
	}
	while (stack.size() > 0) {
		binary += stack.pop();
	}
	return binary;
}

console.log(decimalForBinary(2));
console.log(decimalForBinary(7));
console.log(decimalForBinary(99));
