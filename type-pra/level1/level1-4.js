function sumOfPos(arr) {
    return arr.filter(function (num) { return num >= 0; }).reduce(function (acc, num) { return acc + num; }, 0);
}
// 使用例
var sum2 = sumOfPos([1, 3, -2, 0]);
var sum3 = sumOfPos([4, 6, 5, -3, 8, -3]);
console.log(sum2);
console.log(sum3);
// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);
