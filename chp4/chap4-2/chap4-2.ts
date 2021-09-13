// ジェネリック型
type Filter = {
	<T>(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
	return array;
}

filter([1, 2, 3], _ => _ > 2)

filter(['a', 'b', 'c'], _ => _ !== 'b');
