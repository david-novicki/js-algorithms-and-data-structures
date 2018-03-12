const assert = require('assert'),
	{
		BinaryTree,
		LinkedList,
		DoubleLinkedList,
		CircularLinkedList,
		DFS,
		BFS,
		Bubblesort,
		Quicksort,
		Mergesort,
		Insertionsort
	} = require('../src/index.js');

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
	it('should be 2', function() {
		let LL = new LinkedList();
		LL.add(1);
		LL.add(3);
		LL.insert(2, LL.first);
		assert.equal(LL.first.next.data, 2);
		assert.equal(LL.first.next.next.data, 3);
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
	it('should be inserted properly', function() {
		let DLL = new DoubleLinkedList();
		DLL.add(1);
		DLL.add(3);
		DLL.insert(2, DLL.first);
		assert.equal(DLL.first.next.data, 2);
		assert.equal(DLL.first.next.last.data, 1);
		assert.equal(DLL.first.next.next.data, 3);
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
	it('should be inserted properly', function() {
		let CLL = new CircularLinkedList();
		CLL.add(1);
		CLL.add(3);
		CLL.insert(2, CLL.first);
		assert.equal(CLL.first.next.data, 2);
		assert.equal(CLL.first.next.last.data, 1);
		assert.equal(CLL.first.next.next.data, 3);
		assert.equal(CLL.first.next.next.next.data, 1);
	});
});

describe('Depth first search', function() {
	it('should find value', function() {
		let Tree = new BinaryTree();
		Tree.add(1);
		Tree.add(2);
		Tree.add(3);
		Tree.add(4);
		Tree.add(5);
		assert.equal(DFS(Tree.root, 5), true);
	});
	it('should not find value', function() {
		let Tree = new BinaryTree();
		Tree.add(1);
		Tree.add(2);
		Tree.add(3);
		Tree.add(4);
		Tree.add(5);
		assert.equal(DFS(Tree.root, 6), false);
	});
});

describe('Breadth first search', function() {
	it('should find value', function() {
		let Tree = new BinaryTree();
		Tree.add(2);
		Tree.add(1);
		Tree.add(3);
		Tree.add(4);
		Tree.add(5);
		assert.equal(BFS(Tree.root, 5), true);
	});
	it('should not find value', function() {
		let Tree = new BinaryTree();
		Tree.add(2);
		Tree.add(1);
		Tree.add(3);
		Tree.add(4);
		Tree.add(5);
		assert.equal(BFS(Tree.root, 6), false);
	});
});

describe('Bubblesort', function() {
	it('should sort already sorted list', function() {
		let arr = [ 1 ];
		assert.equal(JSON.stringify(Bubblesort(arr)), JSON.stringify([ 1 ]));
	});
	it('should sort even length', function() {
		let arr = [ 2, 1 ];
		assert.equal(JSON.stringify(Bubblesort(arr)), JSON.stringify([ 1, 2 ]));
	});
	it('should sort odd length', function() {
		let arr = [ 2, 3, 1 ];
		assert.equal(JSON.stringify(Bubblesort(arr)), JSON.stringify([ 1, 2, 3 ]));
	});
	it('should sort long array', function() {
		let arr = [ 2, 3, 1, 10, 20, 13, 12 ];
		assert.equal(JSON.stringify(Bubblesort(arr)), JSON.stringify([ 1, 2, 3, 10, 12, 13, 20 ]));
	});
});

describe('Quicksort', function() {
	it('should sort already sorted list', function() {
		let arr = [ 1 ];
		assert.equal(JSON.stringify(Quicksort(arr, 0, 0)), JSON.stringify([ 1 ]));
	});
	it('should sort even length', function() {
		let arr = [ 2, 1 ];
		assert.equal(JSON.stringify(Quicksort(arr, 0, 1)), JSON.stringify([ 1, 2 ]));
	});
	it('should sort odd length', function() {
		let arr = [ 2, 3, 1 ];
		assert.equal(JSON.stringify(Quicksort(arr, 0, 2)), JSON.stringify([ 1, 2, 3 ]));
	});
	it('should sort long array', function() {
		let arr = [ 2, 3, 1, 10, 20, 13, 12 ];
		assert.equal(JSON.stringify(Quicksort(arr, 0, 6)), JSON.stringify([ 1, 2, 3, 10, 12, 13, 20 ]));
	});
});

describe('Mergesort', function() {
	it('should sort already sorted list', function() {
		let arr = [ 1 ];
		assert.equal(JSON.stringify(Mergesort(arr)), JSON.stringify([ 1 ]));
	});
	it('should sort even length', function() {
		let arr = [ 2, 1 ];
		assert.equal(JSON.stringify(Mergesort(arr)), JSON.stringify([ 1, 2 ]));
	});
	it('should sort odd length', function() {
		let arr = [ 2, 3, 1 ];
		assert.equal(JSON.stringify(Mergesort(arr)), JSON.stringify([ 1, 2, 3 ]));
	});
	it('should sort long array', function() {
		let arr = [ 2, 3, 1, 10, 20, 13, 12 ];
		assert.equal(JSON.stringify(Mergesort(arr)), JSON.stringify([ 1, 2, 3, 10, 12, 13, 20 ]));
	});
});

describe('Insertionsort', function() {
	it('should sort already sorted list', function() {
		let arr = [ 1 ];
		assert.equal(JSON.stringify(Insertionsort(arr)), JSON.stringify([ 1 ]));
	});
	it('should sort even length', function() {
		let arr = [ 2, 1 ];
		assert.equal(JSON.stringify(Insertionsort(arr)), JSON.stringify([ 1, 2 ]));
	});
	it('should sort odd length', function() {
		let arr = [ 2, 3, 1 ];
		assert.equal(JSON.stringify(Insertionsort(arr)), JSON.stringify([ 1, 2, 3 ]));
	});
	it('should sort long array', function() {
		let arr = [ 2, 3, 1, 10, 20, 13, 12 ];
		assert.equal(JSON.stringify(Insertionsort(arr)), JSON.stringify([ 1, 2, 3, 10, 12, 13, 20 ]));
	});
});
