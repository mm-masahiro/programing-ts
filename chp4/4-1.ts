function add(a: number, b: number): number {
	return a + b
}

// 名前付き関数
function greet(name: string) {
	return 'hello ' + name
}

// 関数式
let greet2 = function(name: string) {
	return 'hello ' + name
}

// アロー関数
const greet3 = (name: string) => {
	return 'hello ' + name
}

const greet4 = (name: string) => 'hello ' + name

// 関数コンストラクター（安全ではない）
const greet5 =  new Function('name', 'return "hello" + name')
