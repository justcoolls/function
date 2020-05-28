
function flatten(arr,result = []) {
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i], result)
        }else {
            result.push(arr[i])
        }
    }
    return result;
}
// function flatten(arr) {
//     return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)? flatten(cur):cur),[])
// }
const qwe=flatten([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]);
console.log(qwe)


function fun(arrs) {
    const arr=arrs.sort((a,b)=>{return a-b;})
    const result=[];
    let arrs_li=[];
    let header=0;
    for(let i=0;i<arr.length;i++){
        const new_header=Math.floor(arr[i]/10) ;
        if(header === new_header){
            arrs_li.push(arr[i])
        }else {
            result.push(arrs_li);
            header=new_header;
            arrs_li=[];
        }

    }
    console.log(result)
}
fun([2, 10, 3, 4, 5, 11, 10, 11, 20]);