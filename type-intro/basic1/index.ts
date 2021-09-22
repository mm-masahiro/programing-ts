const f: (foo: string) => number = func;

function func(arg: string): number {
	return Number(arg);
}

const func2 = (foo: string, ...bar: number[]) => bar;
console.log(func2(1,2,4));
