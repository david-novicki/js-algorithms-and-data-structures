const Queue = require('../data-structures/queue');

function bfs(root, match) {
	let queue = new Queue();
	function found(node) {
		if (node == null) return false;
		if (!node.visited) {
			node.visited = true;
		}
		return match == node.value;
	}
	if (found(root)) return true;
	queue.push(root);
	while (!queue.isEmpty()) {
		let node = queue.pop();
		if (found(node.left)) return true;
		if (found(node.right)) return true;
		if (node.left !== null) queue.push(node.left);
		if (node.right !== null) queue.push(node.right);
	}
	return false;
}
module.exports = bfs;
