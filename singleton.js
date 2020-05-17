// 单例模式
var Singleton = function(name){
    this.name = name;
    this.instance = null;
};
Singleton.prototype.getName = function(){
    return this.name;
};
// 获取实例对象
Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
};
// 测试单例模式的实例
var a = Singleton.getInstance("aa");
var b = Singleton.getInstance("bb");

console.log(a,b)    // true