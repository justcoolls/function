function throttle(fn,wait) {
    let time=null;
    return function(){
        let self=this;
        let arg=arguments;
        if(!time){
            time=setTimeout(()=>{
                time=null;
                fn.apply(self,arg)
            },wait)
        }
    }
}
function handle(){
    console.log(Math.random());
}
window.addEventListener("mousemove",throttle(handle,1000));