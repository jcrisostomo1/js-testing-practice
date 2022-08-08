const getSum = (arr) => {
	let total = 0;
	for (let num in arr) {
		total += arr[num];
	}
	return total;
}

const findMinNum = (arr) => {
	let minNum = arr[0];
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] < minNum) {
			minNum = arr[i];
		}
	}
	return minNum;
}

const findMaxNum = (arr) => {
	let maxNum = arr[0];
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] > maxNum ) {
			maxNum = arr[i];
		}
	}
	return maxNum;
}

const analyzeArray = (arr) => {
	const object = {
		average: getSum(arr) / arr.length,
		min: findMinNum(arr),
		max: findMaxNum(arr),
		length: arr.length,
	}
	return object;
}

export default analyzeArray;