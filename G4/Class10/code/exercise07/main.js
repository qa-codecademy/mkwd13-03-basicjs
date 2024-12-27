let array1 = [1, 3, 'Nikola', NaN, 4, undefined, false, true, null, "", 5];
let array2 = [2, 6, "", false, undefined, 4]
function cleanArray(array) {
	let filteredArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i]) {
			filteredArray.push(array[i])
		}
	}
	return filteredArray
}
console.log(cleanArray(array1));
console.log(cleanArray(array2));