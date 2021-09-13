// ジェネレーター関数
// ジェネレーター関数を呼び出すとジェネレーターが返される
function* createFibonacciGenerator() {
	let a = 0
	let b = 1

	while (true) {
		// ジェネレーターが返す値はyeildを使って生成する
		yield a;
		[a, b] = [b, a + b]
	}
}

let fibonacciGenerator = createFibonacciGenerator()

console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
