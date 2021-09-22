const f: (foo: string) => number = func;

function func(arg: string): number {
	return Number(arg);
}

const func2 = (foo: string, ...bar: number[]) => bar;
console.log(func2('bar', 1,2,4));

function voidFunc(num1: number, num2: number): void {
	const sum = num1 + num2;
};


