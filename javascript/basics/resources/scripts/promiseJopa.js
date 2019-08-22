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
    var self = this;
    self.currentStatus = PENDING;
    self.result = this.currentResults;
    console.log("Call JopaPromise", this.currentStatus);

    function resolve(value) {
        self.result = value;
        console.log("Call resolve", self.result);
        self.currentStatus = RESOLVED;
        self.thenListener(self.result);

    }


    executor(resolve);
}

/**
 * then является функцией, которая имеет в качестве аргумента listener.
 * listener это функция, которая принимает в качестве аргумента result.
 * listener будет выполнен только тогда, когда executor выдаст скалярное значение и это значение передасться в listener
 * Listener может возвращать, как скалярное значение, так и JopaPromise
 * Функция вызова then возвращает Promise, он будет ?resolved?, когда listener вернёт скалярное значение
 */

JopaPromise.prototype.then = function (listener) {
    console.log("Call then");

    if (this.currentStatus === RESOLVED) {
        this.currentResults = listener(this.result);
        var currentResult = this.currentResults;
        return new JopaPromise(function (resolve) {
            console.log("Current result: ",currentResult);
            resolve(currentResult);
        });
    }
    if (this.currentStatus === PENDING) {
        this.thenListener = listener;
        return new JopaPromise(function (resolve) {
            console.log("JOPA");

        });

    }

};


var promise = new JopaPromise(function (resolve) {
    console.log("Call executor");
    // resolve("1");
    setTimeout(function () {

        resolve("ВОДКА");
    }, 1)
}).then(function (result) {
    console.log("Call listener, with result: ", result);
    return "Держи водку!";
}).then(function (result2) {
    console.log("Call listener 2, with result: ", result2);
    return "Что-то пусто :(";
});
