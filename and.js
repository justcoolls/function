let nums1=[1,6]
let nums2=[2,1,3]
function fun(nums1,nums2){
    const numList=[];
    for(let i=0;i<nums1.length;i++){

        if(nums2.indexOf(nums1[i])<0){
            break;
        }
        const num =nums2.splice(nums2.indexOf(nums1[i]),1)
        numList.push(num[0])
    }
    console.log(numList) ;
}
fun(nums1,nums2)