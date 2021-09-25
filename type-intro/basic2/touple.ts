type Args = [string, number, boolean];

const func3 = (...args: Args) => args[0];

const v = func3('foo', 3, true)
console.log(v);

const func4 = (...args: string[]) => args[1];

const strings: string[] = ['foo', 'bar', 'baz'];

// 配列stringsの中身をfunc4の引数に展開して呼び出す
console.log(func4(...strings));


// 関数の引数列をジェネリクスで扱う
function bind<T, U extends any[], R> (
	func: (arg1: T, ...rest: U) => R,
	value: T,
): ((...args: U) => R) {
	return (...args: U) => func(value, ...args);
}

const add1 = (x: number, y: number) => x + y;

const add2 = bind(add1, 1);

console.log(add2(5));
