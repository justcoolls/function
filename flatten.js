
function flatten(arr) {
    var res=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res= res.concat(flatten[arr[i]])
        }else {
            res.push(arr[i])
        }
    }
    return res;
}
function flatten(arr) {
    return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)? flatten(cur):cur),[])
}
const qwe=flatten([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]);
console.log(qwe)