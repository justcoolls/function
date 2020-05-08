class _Promise {
    constructor(handle) {
        if (typeof handle !== "function") {
            throw Error('Promise param is not a function .')
        }
        this.status = "padding";
        this.value = undefined;
        //列队
        this.resolveQueues = [];
        this.rejectQueues = [];
        try {
            handle(this.resolve.bind(this), this.reject.bind(this))
        } catch {
            throw Error(e);
            this.reject(e)
        }
    }

    resolve(val) {
        if (this.status !== "padding") return;
        this.status = "resolve"
        this.value = val
        this.resolveQueues.map(fn => fn(this.value));
    }

    reject(err) {
        if (this.status !== "padding") return;
        this.status = "reject"
        this.value = err
        this.rejectQueues.map(fn => fn(this.value));
    }

    then(onResolved, onRjected) {
        const {value, status, resolveQueues, rejectQueues} = this;
        if (status === "padding") {
            resolveQueues.push(onResolved);
            rejectQueues.push(onRjected)
        }
        if (status === "resolve") {
            onResolved(value)
        }
        if (this.status === "reject") {
            onRjected(value)
        }
        return new _Promise((onFulfilledNext, onRejectedNext) => {
            
        })
    }
}

function test() {

    new _Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(11)
        },1000);
        setTimeout(function () {
            resolve(22)
        },2000)
    }).then((res) => {
        console.log("res", res)
    }, (error) => {
        console.log("err", error)
    }).then((res) => {
        console.log("res2", res)
    }, (error) => {
        console.log("err2", error)
    });
}

test();