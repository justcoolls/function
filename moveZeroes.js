var moveZeroes = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!==0){
            nums[k++] =nums[i]
        }
    }
    console.log(nums)
    for (let j = k; j < nums.length; j++) {
        nums[j] = 0;
    }
    console.log(nums)
    return nums
};
moveZeroes([0,1,0,3,12])