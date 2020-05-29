function sort(arr) {
    if(arr.length <= 1){
        return arr
    }
    var mid = parseInt(arr.length / 2)
    var left = [],right = []
    var pivot = arr.splice(mid,1)[0]
    arr.forEach(item => {
        if(item < pivot){
            left.push(item)
        }else {
            right.push(item)
        }
    })
    return sort(left).concat([pivot],sort(right))
}
var arr = [3,1,5,7,2,4,9,6]
console.log('排序前：'+arr);
console.log('排序后:'+sort(arr));