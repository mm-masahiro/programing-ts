var f = func;
function func(arg) {
    return Number(arg);
}
var func2 = function (foo) {
    var bar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bar[_i - 1] = arguments[_i];
    }
    return bar;
};
console.log(func2('bar', 1, 2, 4));
function voidFunc(num1, num2) {
    var sum = num1 + num2;
}
;
var obj = {
    foo: 2,
    bar: 'bar'
};
var obj3 = {
    foo: {
        foo1: 'foo1',
        foo2: 'foo2'
    },
    bar: 'bar'
};
var foo = ['foo', 8];
var a1 = [3, 'hoge', 'foo'];
var func3 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args[0];
};
var v = func3('foo', 3, true);
console.log(v);
