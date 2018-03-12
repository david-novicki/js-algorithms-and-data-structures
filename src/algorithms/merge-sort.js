function mergeSort(arr) {
	//check for length of 1 and if so return array
	if (arr.length === 1) return arr;

	//get rounded halfway point
	const middle = Math.floor(arr.length / 2);
	//get items on the left
	const left = arr.slice(0, middle);
	//get items on the right
	const right = arr.slice(middle);
	//recursively mergesort all left first then all right and do a merge
	return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
	let result = [];
	let indexLeft = 0;
	let indexRight = 0;

	while (indexLeft < left.length && indexRight < right.length) {
		if (left[indexLeft] < right[indexRight]) {
			result.push(left[indexLeft]);
			indexLeft++;
		} else {
			result.push(right[indexRight]);
			indexRight++;
		}
	}
	//get rest of left if there is any
	let restOfLeft = left.slice(indexLeft);
	//get rest of right if there is any
	let restOfRight = right.slice(indexRight);
	return result.concat(restOfLeft).concat(restOfRight);
}
module.exports = mergeSort;
