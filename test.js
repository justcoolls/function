
let obj = {1:222, 2:123, 5:888};
obj.length = 12;
let _obj = Array.from(obj).slice(1);
// console.log(_obj)


function fun(nums1,nums2){
    for(let i=0;i<nums1.length;i++){
        const num =nums1.repalce(nums1[i],"")
        if(num){
            nums2.repalce(nums1[i],"")
            numList.push(num)
        }
    }
    console.log(numList) ;
}
fun(nums1,nums2)


