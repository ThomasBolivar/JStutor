/**
 * Реализовать функцию JopaPromise
 * она принимает в себя executor(функцию)
 * executor принимает в качестве аргумента функцию resolve, которая по окончанию executor вызывается.
 * Функция resolve принимает в качестве аргумента или скалярное или JopaPromise
 *
 *
 * */
var PENDING = "PENDING";
var RESOLVED = "RESOLVED";

function JopaPromise(executor) {
    console.log("Inside JOPApromise");
    console.log("___________________");
    this.currentStatus = PENDING;

    console.log("Call JopaPromise", this.currentStatus);

    this.resolve = this.resolve.bind(this);
    executor(this.resolve);

}

/**
 * then является функцией, которая имеет в качестве аргумента listener.
 * listener это функция, которая принимает в качестве аргумента result.
 * listener будет выполнен только тогда, когда executor выдаст скалярное значение и это значение передасться в listener
 * Listener может возвращать, как скалярное значение, так и JopaPromise
 * Функция вызова then возвращает Promise, он будет ?resolved?, когда listener вернёт скалярное значение
 */
JopaPromise.prototype.resolve = function (value) {
    console.log("Inside resolve!");
    this.result = value;
    this.currentStatus = RESOLVED;
    console.log("Current status", this.currentStatus);
    this.thenListener(this.result);

};
JopaPromise.prototype.then = function (listener) {
    console.log("Call then");

    if (this.currentStatus === RESOLVED) {
        this.currentResults = listener(this.result);
        var currentResult = this.currentResults;
        return new JopaPromise(function (resolve) {
            console.log("Current result: ", currentResult);
            resolve(currentResult);
        });
    }
    if (this.currentStatus === PENDING) {
        this.thenListener = listener;
        var a = this.thenListener(this.result);
        return new JopaPromise(function (resolve) {

        });
    }
};


var promise = new JopaPromise(function (resolve) {
    console.log("Call executor");
    // resolve("1");
    setTimeout(function () {
        console.log("Inside timeout");
        resolve("JOPA");
    }, 1000)
}).then(function (result) {
    console.log("Call listener, with result: ", result);

    return "JOPA2";
}).then(function (result2) {
    console.log("Call listener 2, with result: ", result2);
    return "JOPA3";
}).then(function (result3) {
    console.log("Call listener 3, with result: ", result3);
    return "JOPA4";
});
