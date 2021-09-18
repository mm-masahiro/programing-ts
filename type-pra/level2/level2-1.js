// type Fileter = {
// 	<T>(arr: T[], f: (predicate: T) => boolean): T[]
// }
function myFilter(arr, predicate) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elm = arr_1[_i];
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}
// 使用例
var res = myFilter([1, 2, 3, 4, 5], function (num) { return num % 2 === 0; });
var res2 = myFilter(['foo', 'hoge', 'bar'], function (str) { return str.length >= 4; });
console.log(res);
console.log(res2);
// // エラー例
// // myFilter([1, 2, 3, 4, 5], str => str.length >= 4);
