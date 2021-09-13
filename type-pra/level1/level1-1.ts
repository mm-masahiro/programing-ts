function isPositive(num: number): boolean {
	return num >= 0;
}

// 使用例
console.log(isPositive(3));
console.log(isPositive(-1));

// エラー例
// isPositive('123');
// const numVar: number = isPositive(-5);
