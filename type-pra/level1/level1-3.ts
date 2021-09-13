type IsPositiveFunc = (num: number) => boolean

const isPositive2: IsPositiveFunc = num => num >= 0;

// 使用例
console.log(isPositive2(5));
console.log(isPositive2(-34));

// エラー例
// isPositive2('foo');
// const res: number = isPositive(123);
