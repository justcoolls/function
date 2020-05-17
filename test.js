var longestCommonPrefix = function(s) {
    let len=s.length
    for(let i=0;i<len;i++){
        s=s.replace("()","")
        s=s.replace("{}","")
        s=s.replace("[]","")
    }
    console.log(s.length)
    return s.length===0?true:false;

};
longestCommonPrefix("()")