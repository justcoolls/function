const Event = function () {
    this.event = {};
};
Event.prototype.on = function (type, fun) {
    if (!this.event) {
        this.event = {};
    }
    if (!this.event[type]) {
        this.event[type] = [];
    }
    this.event[type].push(fun);
};
Event.prototype.emit = function (type, ...arg) {
    if (this.event[type]) {
        for (let i = 0; i < this.event[type].length; i++) {
            this.event[type][i](...arg)
        }
    }
};
Event.prototype.remove=function(type,fn){
    if(fn){
        if(this.event[type].length){
            this.event[type].splice(fn,1)
        }else {
            delete  this.event[type];
        }
    }
};
Event.prototype.once=function(type,fn){
  const self=this;
  function g(){
      self.remove(type,fn);
      fn.apply(self,arguments);
  }
  this.on(type,g);
  return this;
};

let event=new Event();


event.once('say',function(str){
    console.log(str,888);
});

event.emit('say','hello 1');
event.emit('say','hello 1');

event.on('say',function(str){
    console.log(str,999);
});
event.emit('say','hello 2');
event.emit('say','hello 3');
