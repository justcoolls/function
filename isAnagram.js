var isAnagram = function(s, t) {
    let len=s.length
    for (let i=0;1<len;i++){
        if(s == t || s.length !==t.length ){
            break;
        }
        const chart=s[0]
        s=s.replace(chart,"")
        t=t.replace(chart,"")
        console.log(s,t)
    }
    return s == t?true:false;
};
console.log(isAnagram("qwert","trewq"))