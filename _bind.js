Function.prototype._bind=function(obj){
    const arr=Array.prototype.slice.call(arguments,1);
    const self=this;
    return function(){
        return self.apply(obj,arr.concat(...arguments))
    }
};