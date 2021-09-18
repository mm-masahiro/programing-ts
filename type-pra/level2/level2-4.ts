function giveId<T>(obj: T): T & { id: string } {
  const id = "本当はランダムがいいけどここではただの文字列";
  return {
    ...obj,
    id
  };
}

// 使用例
const obj1: {
  id: string;
  foo: number;
} = giveId({ foo: 123 });

const obj2: {
  id: string;
  num: number;
  hoge: boolean;
} = giveId({
  num: 0,
  hoge: true
});

console.log(obj1);
console.log(obj2);

// エラー例
// const obj3: {
//   id: string;
//   piyo: string;
// } = giveId({
//   foo: "bar"
// });
