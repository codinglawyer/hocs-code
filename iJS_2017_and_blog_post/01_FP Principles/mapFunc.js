const numbers = [1, 5, 8, 10, 21]
const createAddingFunction = number => arr => arr.map(num => num + number)
const numbersPlusOne = createAddingFunction(1)
console.log(numbersPlusOne(numbers))  //[2, 6, 9, 11, 22]