const Stack = require('../data-structures/stack');

function dfs(root, match) {
	let stack = new Stack();
	function found(node) {
		if (node == null) return false;
		if (!node.visited) {
			node.visited = true;
			stack.push(node);
		}
		return match == node.value;
	}
	if (found(root)) return true;
	while (!stack.isEmpty()) {
		let node = stack.pop();
		if (found(node.left)) return true;
		if (found(node.right)) return true;
	}
	return false;
}
module.exports = dfs;
