class BinaryTree {
	constructor() {
		this.root = null;
	}
	add(value) {
		let node = {
			value: value,
			left: null,
			right: null
		};
		if (!this.root) this.root = node;
		else {
			let current = this.root;
			while (true) {
				if (value < current.value) {
					if (current.left === null) {
						current.left = node;
						break;
					} else current = current.left;
				} else if (value > current.value) {
					if (current.right === null) {
						current.right = node;
						break;
					} else current = current.right;
				} else break;
			}
		}
	}
	contains(value) {
		let found = false;
		let current = this.root;
		while (!found && current) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else found = true;
		}
		return found;
	}
}
module.exports = BinaryTree;
