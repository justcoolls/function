Function.prototype._new = function(fn,...arg){
    const obj={};
    obj._proto_=fn.prototype;
    fn.apply(obj,...arg);
    return obj;
};