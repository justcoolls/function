function _new(fn,...arg){
    const obj={};
    obj._proto_=fn.prototype;
    fn.apply(obj,[...arg]);
    return obj;
};
function People(name,age){
    this.name = name;
    this.age = age;
}
//通过new创建构造实例
let people1 = new People('Jack',20);
console.log(people1.name) //Jack
console.log(people1.age) //20

//通过create方法创造实例
let people2 = _new(People,'Rose',18);//调用自定义create实现new
console.log(people2.name) //Rose
console.log(people2.age) //18