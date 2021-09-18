// type Fileter = {
// 	<T>(arr: T[], f: (predicate: T) => boolean): T[]
// }

function myFilter<T>(arr: Array<T>, predicate: (element: T) => boolean): Array<T> {
  const result = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
}

// 使用例
const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

console.log(res);
console.log(res2);

// // エラー例
// // myFilter([1, 2, 3, 4, 5], str => str.length >= 4);
