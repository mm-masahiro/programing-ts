interface AddEventListnerOptionlObject {
	capture?: string;
	once?: string;
	passive?: string;
}

declare function addEventListener(
	type: string,
	func: () => void,
	options?: boolean | AddEventListnerOptionlObject
): void;

// 使用例
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false
});

// エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true
// });
