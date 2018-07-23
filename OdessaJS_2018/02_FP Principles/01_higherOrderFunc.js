const numbers = [1, 5, 8, 10, 21]
const createAddingFunction = number => arr => arr.map(num => num + number)
const numbersPlusOne = createAddingFunction(1)
const result = numbersPlusOne(numbers)
console.log(result)  //[2, 6, 9, 11, 22]