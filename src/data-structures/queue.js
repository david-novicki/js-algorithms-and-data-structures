class Queue {
	constructor() {
		this.items = [];
	}
	push(item) {
		this.items = [ item, ...this.items ];
	}
	pop() {
		return this.items.pop();
	}
	isEmpty() {
		return this.items.length == 0;
	}
	length() {
		return this.items.length;
	}
}
module.exports = Queue;
