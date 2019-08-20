function MyPromise(executor) {
    var currentState = "PENDING";
    var value = undefined; // value can be a variable or it can be a function
    this.fulfillReactions = [];
    var self = this;

    function resolve(value) {
        this.value = value;
        currentState = "RESOLVED";
        if (value !== undefined) {
            return this.value;
        } else if (typeof value === "function"){
            // has to return new Promise
        }
    }

    this.then = function (onResolved) {
        return new MyPromise(function (resolve) {

        });

    };
    executor(resolve);
}


var promise = new MyPromise(function (resolve) {

}).then(function () {
        console.log("first");
    }
).then(function () {
    console.log("Second");

}).then(function () {
    console.log("Third");
});
promise.then(function (resolve) {
    console.log("hello");
});
