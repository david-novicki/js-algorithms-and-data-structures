function quicksort(arr, left, right) {
	let pivot;
	let partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(arr, right, left, right);

		//sort left and right
		quicksort(arr, left, partitionIndex - 1);
		quicksort(arr, partitionIndex + 1, right);
	}
	return arr;
}
function partition(arr, pivot, left, right) {
	let pivotValue = arr[pivot];
	let partitionIndex = left;

	for (var i = left; i < right; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(arr, right, partitionIndex);
	return partitionIndex;
}
function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
module.exports = quicksort;
