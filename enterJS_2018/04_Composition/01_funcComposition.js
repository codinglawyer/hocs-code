const number = 15
const increment = num => num + 5
const decrement = num => num - 3
const multiply = num => num * 2

const operation = increment(decrement(multiply(number)))
console.log(operation)  //32