function sum (arr,target) {
    for(let i=0;i<arr.length;i++){
        const num =target-arr[i]
        if(arr.indexOf(num)>i){
            console.log([arr[i],arr[arr.indexOf(num)]])

            return[arr[i],arr[arr.indexOf(num)]]
        }
    }
};
sum([2, 7, 11, 15], 9);