// pure function
const numbers = [1, 5, 8, 10, 21]
const numbersPlusOne = numbers.map(num => num + 1)
console.log(numbersPlusOne)  // [2, 6, 9, 11, 22]
console.log(numbers)  // [1, 5, 8, 10, 21]


// impure function
const numbers = [1, 5, 8, 10, 21]
const numbersPlusOne = numbers => {
	for(let i = 0; i < numbers.length; i++) {
		numbers[i] = numbers[i] + 1
	}
	return numbers
}
numbersPlusOne(numbers) // [2, 6, 9, 11, 22]
console.log(numbers) // [2, 6, 9, 11, 22]