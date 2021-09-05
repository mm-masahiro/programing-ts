// ジェネレーター関数を呼び出すとイテレーターが返される
let numbers = {
	*[Symbol.iterator]() {
		for (let n = 1; n <= 10; n++) {
			yield n
		}
	}
}
