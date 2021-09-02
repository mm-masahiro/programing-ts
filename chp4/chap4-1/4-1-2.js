function sum(numbers) {
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
console.log(sum([1, 2, 3]));
function sumVariadic() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Array.from(arguments).reduce(function (total, n) { return total + n; }, 0);
}
console.log(sumVariadic(1, 2, 3));
function sub() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return Array.from(arguments).reduce(function (result, n) { return result - n; }, 100);
}
console.log(sub(10, 2, 4));
