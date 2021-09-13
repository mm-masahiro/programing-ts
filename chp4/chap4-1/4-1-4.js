var x = {
    a: function () {
        return this;
    }
};
console.log(x.a());
var a = x.a;
console.log(a());
function fancyDate() {
    return this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear();
}
var date = new Date();
console.log(fancyDate.call(new Date));
