const symmetricalTree = {
    val: 8,
    left: {
        val: 6,
        left: { val: 5, left: null, right: null },
        right: { val: 7, left: null, right: null }
    },
    right: {
        val: 6,
        left: { val: 7, left: null, right: null },
        right: { val: 5, left: null, right: null }
    }
}
function fun(root,resut=[]){
    if(!root){
        return resut
    }
    fun(root.left,resut)
    resut.push(root.val)
    fun(root.right,resut)
    return resut
}
console.log(fun(symmetricalTree))


function fun2(list,result=[]){
    const lists=[]
    const li=[]
    list.map((item)=>{
        if(item.left){
            lists.push(item.left);
        }
        if(item.right){
            lists.push(item.right);
        }
        li.push(item.val)
    });
    result.push(li);
    if(lists.length!==0){
        fun2(lists,result);
    }
    return result

}
console.log(fun2([symmetricalTree]))