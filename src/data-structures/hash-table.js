//This is a hash table that handles collisions with a linked at each index
const LinkedList = require('./linked-list');
class HashTable {
	constructor(size) {
		this.size = size || 30;
		this.items = [];
	}
	add(key, value) {
		//generate hash
		let index = this.hash(key);
		//find corresponding index
		let spot = this.items[index];
		//check for linked list already if not create a new one
		if (!spot) {
			spot = new LinkedList();
			//add to this linked list
			spot.add(value);
			this.items[index] = spot;
		} else if (!spot.contains(value)) spot.add(value); //add to this linked list only if it doesnt exist
	}
	contains(key, value) {
		//find potential index
		let index = this.hash(key);
		let spot = this.items[index];
		if (!spot) return false;
		return spot.contains(value);
	}
	hash(key) {
		let charValues = 0;
		for (let i = 0; i < key.length; i++) {
			charValues += key.charCodeAt(i);
		}
		return charValues % this.size;
	}
}
module.exports = HashTable;
