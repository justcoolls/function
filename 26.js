function f(str) {
    let num=0
    for(let i=0,j=1;i<str.length;i++,j*=26){
        const n=str[i].toUpperCase().charCodeAt(0)-64
        num+=n*j*1
        console.log(i,j)
    }
    console.log(num)
}
f("aA")