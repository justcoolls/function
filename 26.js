function f(str) {
    let num=0
    for(let i=0,j=1;i<str.length;i++,j*=26){
        const n=str[i].toUpperCase().charCodeAt(0)-64
        num+=n*j
    }
    console.log(num)
}
f("aAa")