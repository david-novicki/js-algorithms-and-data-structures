function bubblesort(arr) {
	if (!Array.isArray(arr) || arr.length < 2) return arr;
	let localArr = [ ...arr ];
	let currentIdx = 0;
	while (currentIdx < localArr.length - 1) {
		let wasSwap = false;
		if (localArr[currentIdx] > localArr[currentIdx + 1]) {
			wasSwap = true;
			let temp1 = localArr[currentIdx];
			let temp2 = localArr[currentIdx + 1];
			localArr[currentIdx] = temp2;
			localArr[currentIdx + 1] = temp1;
		}
		currentIdx++;
		//if at end of localArr check wasSwap to determine if we need another pass
		if (currentIdx >= localArr.length - 1 && wasSwap) currentIdx = 0;
	}
	return localArr;
}
module.exports = bubblesort;
