class Node {
	constructor(data, next, last) {
		this.data = data;
		this.next = next;
		this.last = last;
	}
	setNext(next) {
		this.next = next;
	}
	setLast(last) {
		this.last = last;
	}
}
module.exports = Node;
