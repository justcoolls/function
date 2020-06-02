var maxSubArray = function(nums) {
    let result=[nums[0]];
    let sum=nums[0]
    let max=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        result.push(nums[i]);
        if(sum<0 ||result[0]<=0){
            result=[];
            sum=0
        }
        max=sum>max?sum:max
    }
    console.log(max)
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])