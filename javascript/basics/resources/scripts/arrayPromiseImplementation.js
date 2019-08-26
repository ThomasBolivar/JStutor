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
    self.listenersArray = [];
    self.currentStatus = PENDING;
    self.result = undefined;
    console.log("Call JopaPromise", self.currentStatus);

    function resolve(value) {
        self.result = value;
        console.log("Call resolve", self.result);
        self.currentStatus = RESOLVED;
        for (var i = 0; i < self.listenersArray.length; i++) {
            console.log("inside for loop");
            self.result = self.listenersArray[i](self.result);
        }
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

    this.listenersArray.push(listener);
    return this;

};


var promise = new JopaPromise(function (resolve) {
    console.log("Call executor");
    // resolve("1");
    setTimeout(function () {
        resolve("1");
    }, 1000)
}).then(function (result) {
    console.log("Call listener, with result: ", result);
    return 2;
}).then(function (result2) {
    console.log("Call listener 2, with result: ", result2);
    return 3;
});



