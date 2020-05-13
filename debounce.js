function handle(){
    console.log(Math.random());
}
window.addEventListener("mousemove",debounce(handle,1000));

function debounce(fn,wait){
    let timer=null;
    return function () {
        if(timer !== null){
            clearTimeout(timer)
        }
        timer =setTimeout(fn,wait);
    }
}