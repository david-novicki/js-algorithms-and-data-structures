const Node = require('./node');

class CircularDoubleLinkedList {
	constructor() {
		this.first = null;
	}
	add(data) {
		if (this.first === null) this.first = new Node(data, null);
		else {
			let currentNode = this.first;
			while (true) {
				if (currentNode.next === null) {
					currentNode.setNext(new Node(data, this.first, currentNode));
					break;
				} else currentNode = currentNode.next;
			}
		}
	}
	contains(data) {
		let found = false;
		let currentNode = this.first;
		while (currentNode !== null && !found) {
			if (currentNode.data == data) found = true;
			else {
				if (currentNode.next === this.first) break;
				else currentNode = currentNode.next;
			}
		}
		return found;
	}
}
module.exports = CircularDoubleLinkedList;
