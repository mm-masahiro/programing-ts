var func3 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args[0];
};
var v = func3('foo', 3, true);
console.log(v);
var func4 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args[1];
};
var strings = ['foo', 'bar', 'baz'];
// 配列stringsの中身をfunc4の引数に展開して呼び出す
console.log(func4.apply(void 0, strings));
