const assert = require('assert'),
	BinaryTree = require('../data-structures/binary-tree'),
	LinkedList = require('../data-structures/linked-list'),
	DoubleLinkedList = require('../data-structures/double-linked-list'),
	CircularLinkedList = require('../data-structures/circular-linked-list');

describe('Binary Tree', function() {
	describe('#new()', function() {
		it('should be created', function() {
			let Tree = new BinaryTree();
			assert.equal(Tree.root, null);
		});
	});
	describe('#add()', function() {
		it('should be true', function() {
			let Tree = new BinaryTree();
			Tree.add(2);
			Tree.add(1);
			Tree.add(3);
			assert.equal(Tree.root.value, 2);
			assert.equal(Tree.root.right.value, 3);
			assert.equal(Tree.root.left.value, 1);
		});
	});
	describe('#contains()', function() {
		it('should be true', function() {
			let Tree = new BinaryTree();
			Tree.add(1);
			assert.equal(Tree.contains(1), true);
		});
		it('should be false', function() {
			let Tree = new BinaryTree();
			Tree.add(1);
			assert.equal(Tree.contains(2), false);
		});
		it('should be true', function() {
			let Tree = new BinaryTree();
			Tree.add(1);
			Tree.add(2);
			Tree.add(3);
			assert.equal(Tree.contains(1), true);
			assert.equal(Tree.contains(2), true);
			assert.equal(Tree.contains(3), true);
		});
	});
});

describe('Linked List', function() {
	it('should be created', function() {
		let LL = new LinkedList();
		assert.equal(LL.first, null);
	});
	it('should be null', function() {
		let LL = new LinkedList();
		assert.equal(LL.first, null);
	});
	it('should be 1', function() {
		let LL = new LinkedList();
		LL.add(1);
		assert.equal(LL.first.data, 1);
	});
	it('should be 2', function() {
		let LL = new LinkedList();
		LL.add(1);
		LL.add(2);
		assert.equal(LL.first.next.data, 2);
	});
	it('should be false', function() {
		let LL = new LinkedList();
		assert.equal(LL.contains(1), false);
	});
	it('should be true', function() {
		let LL = new LinkedList();
		LL.add(1);
		assert.equal(LL.contains(1), true);
	});
	it('should be true', function() {
		let LL = new LinkedList();
		LL.add(1);
		assert.equal(LL.contains(2), false);
	});
});
describe('Double Linked List', function() {
	it('should be created', function() {
		let DLL = new DoubleLinkedList();
		assert.equal(DLL.first, null);
	});
	it('should be true', function() {
		let DLL = new DoubleLinkedList();
		DLL.add(1);
		assert.equal(DLL.contains(1), true);
	});
	it('should be true', function() {
		let DLL = new DoubleLinkedList();
		DLL.add(1);
		assert.equal(DLL.contains(2), false);
	});
	it('should all be true', function() {
		let DLL = new DoubleLinkedList();
		DLL.add(1);
		DLL.add(2);
		assert.equal(DLL.first.data, 1);
		assert.equal(DLL.first.next.data, 2);
		assert.equal(DLL.first.next.last.data, 1);
	});
});
describe('Circular Linked List', function() {
	it('should be created', function() {
		let CLL = new CircularLinkedList();
		assert.equal(CLL.first, null);
	});
	it('should be true', function() {
		let CLL = new CircularLinkedList();
		CLL.add(1);
		assert.equal(CLL.contains(1), true);
	});
	it('should be true', function() {
		let CLL = new CircularLinkedList();
		CLL.add(1);
		assert.equal(CLL.contains(2), false);
	});
	it('should all be true', function() {
		let CLL = new CircularLinkedList();
		CLL.add(1);
		CLL.add(2);
		assert.equal(CLL.first.data, 1);
		assert.equal(CLL.first.next.data, 2);
		assert.equal(CLL.first.next.last.data, 1);
		assert.equal(CLL.first.next.next, CLL.first);
	});
});
