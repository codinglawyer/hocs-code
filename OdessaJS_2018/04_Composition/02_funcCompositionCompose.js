const compose = (...funcs) => value =>
	funcs.reduceRight((acc, func) => func(acc)
		, value)

const number = 15
const increment = num => num + 5
const decrement = num => num - 3
const multiply = num => num * 2

const funcComposition = compose(
	increment,
	decrement,
	multiply
)

const result = funcComposition(number)
console.log(result)  //32