var url = function(url) {
 try{
     new URL(url);
     return true;
 } catch(err){
     return true;
 }
};

const qwe=url("https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/138")
console.log(qwe)