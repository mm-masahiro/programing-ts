type Args = [string, number, boolean];

const func3 = (...args: Args) => args[0];

const v = func3('foo', 3, true)
console.log(v);

const func4 = (...args: string[]) => args[1];

const strings: string[] = ['foo', 'bar', 'baz'];

// 配列stringsの中身をfunc4の引数に展開して呼び出す
console.log(func4(...strings));
