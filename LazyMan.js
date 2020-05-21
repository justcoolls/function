function _LazyMan(name){
    this.name=name;
    const list=[];
    this.sleep=function (wait) {
        const self=this;
        setTimeout(()=>{
            this.next()
        },wait);
        return this;
    };
    this.next=function () {
        if(list.length>0){
            list[0]();
        }
    };
    this.eat=function (food) {
        const name=this.name;
        let task=function(){
            console.log(`${name}正在吃 ${food}`);
        };
        list.push(task);
        return this;
    };
}

function LazyMan(name) {
    return new _LazyMan(name)
}


LazyMan("Hank").sleep(1000).eat("dinner")