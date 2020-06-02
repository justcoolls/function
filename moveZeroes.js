var moveZeroes = function(nums) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[k++]=nums[i]
        }
    }
    for(let i=k;i<nums.length;i++){
        nums[i]=0
    }
    console.log(nums)
};
let nums=[4,0,2,0,1,1,1]

