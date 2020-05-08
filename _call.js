Function.prototype._call=function(obj = window,...arg) {
    obj.fun=this;
    const res=obj.fun(...arg);
    delete  obj.fun;
    return res;
};

const person = {
    age: 3
};
function fn(name,aaa) {
    this.name = name;
    this.aaa = aaa;
    console.log(this);
}
fn._call(person, 'xzf','qwe');
