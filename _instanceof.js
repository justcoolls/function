
function _instanceof(left,right){
    let leftProto=left.__proto__;
    const rigntProto=right.prototype;

    while (true){
        if(leftProto === null){
            return false
        }
        if(leftProto === rigntProto){
            return true;
        }
        leftProto=leftProto.__proto__;
    }
}

const status=_instanceof([],Array);
console.log(status)