function sum(numbers: number[]): number {
	return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum([1, 2, 3]))

function sumVariadic(...numbers: number[]): number {
	return Array.from(arguments).reduce((total, n) => total + n, 0)
}

console.log(sumVariadic(1, 2, 3))
