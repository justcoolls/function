function  max(str) {
    const obj={}
    let num=0;
    let maxStr;
    let q=[]
    const len=str.length
    for(let i=0;i<len;i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }else {
            obj[str[i]]=1
        }
    }
    //
    for ( let i in obj) {

        if(obj[i]>=num){
            if(obj[i]>num){
                num=obj[i]
                maxStr=i
                q=[]
            }else {
                q.push(i)
            }

        }
    }
    console.log(maxStr,...q)
    return maxStr;
}
max([1,1,2,3,3,4,5,5,5,6,6,7,7,7])