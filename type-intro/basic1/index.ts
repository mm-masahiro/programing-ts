const f: (foo: string) => number = func;

function func(arg: string): number {
	return Number(arg);
}

const func2 = (foo: string, ...bar: number[]) => bar;
console.log(func2('bar', 1,2,4));

function voidFunc(num1: number, num2: number): void {
	const sum = num1 + num2;
};

// generics
interface Foo<S, T> {
	foo: S,
	bar: T,
}

const obj: Foo<number, string> = {
	foo: 2,
	bar: 'bar',
}

const obj3: Foo<object, string> = {
	foo: {
		foo1: 'foo1',
		foo2: 'foo2',
	},
	bar: 'bar',
}

const foo: [string, number] = ['foo', 8];

type NumAndStrings = [number, ...string[]];

const a1: NumAndStrings = [3, 'hoge', 'foo'];
