event.prototype.once=function (type,fn){

    const self=this;
    function f() {
        self.remove(type,fn);

        fn.apply(self,arguments)
    }
    this.on(type,f)
}