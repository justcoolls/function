function sort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 1; j < len-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr);
}
sort([2,5,7,3,7,4,5,9])