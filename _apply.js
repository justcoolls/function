Function.prototype._apply = function (abj) {
    abj.fn=this;
    let res;
    if(arguments[1]) {
        res = abj.fn(...arguments[1]);
    } else {
        res = abj.fn();
    }
    delete abj.fn;
    return res
};
const person = {
    age: 3
};
function fn(name) {
    this.name = name;
    console.log(this);
}
fn._apply(person, ['xzf',"qwe"]);