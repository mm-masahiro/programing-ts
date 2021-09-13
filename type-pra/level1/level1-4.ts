function sumOfPos(arr: number[]) {
  return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum2: number = sumOfPos([1, 3, -2, 0]);
const sum3: number = sumOfPos([4, 6, 5, -3, 8, -3])

console.log(sum2);
console.log(sum3);

// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);
