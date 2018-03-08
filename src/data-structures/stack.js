class Stack extends Array {
	constructor() {
		super();
	}
	isEmpty() {
		return this.length == 0;
	}
	contains(data) {
		let found = this.find((item) => (item.data = data));
		if (!found) return false;
		else return true;
	}
}
module.exports = Stack;
