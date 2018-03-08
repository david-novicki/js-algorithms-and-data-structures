Array.prototype.mergeSort = function() {
	let self = this;
};
function sort(tempArr) {
	let newArray = [];
	if (tempArr.length > 2) newArray = split(tempArr);
	if (newArray.length < 2) return newArray;
	else if (newArray[0] == newArray[1]) return newArray;
	else if (newArray[0] > newArray[1]) return newArray;
}
function split(arr) {
	let halfLength = Math.ceil(arr.length / 2);
	let leftSide = arr.splice(0, halfLength);
}
