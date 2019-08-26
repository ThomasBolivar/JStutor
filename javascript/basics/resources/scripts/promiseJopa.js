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
    this.currentStatus = PENDING;
    this.result = undefined;
    this.thenListener = undefined;
    this.thenResolve = undefined;

    this.resolve = function (value) {
        this.result = value;
        this.currentStatus = RESOLVED;
        console.log("Call resolve", this.result);
        if (this.thenListener !== undefined) {
            var a = this.thenListener(this.result);
            console.log(a);
            this.thenResolve(a);
        }
    };

    this.then = function (listener) {
        console.log("Call then");

        if (this.currentStatus === PENDING) {
            this.thenListener = listener;
            var self = this;
            return new JopaPromise(function (resolve) {
                console.log("JOPA");
                self.thenResolve = resolve;
            });

        }

    };


    console.log("Call JopaPromise", this.currentStatus);


    executor(this.resolve.bind(this));
}

/**
 * then является функцией, которая имеет в качестве аргумента listener.
 * listener это функция, которая принимает в качестве аргумента result.
 * listener будет выполнен только тогда, когда executor выдаст скалярное значение и это значение передасться в listener
 * Listener может возвращать, как скалярное значение, так и JopaPromise
 * Функция вызова then возвращает Promise, он будет ?resolved?, когда listener вернёт скалярное значение
 */




var promiseMagaz = new JopaPromise(
    function (resolve) {
        console.log("Call executor");
        // resolve("1");
        setTimeout(function () {
            console.log("After timeout");
            resolve("ВОДКА");
        }, 1000)
    });

var alkah01 = promiseMagaz.then(
    function (result) {
        console.log("alkah01, with result: ", result);
        return "Держи водку!";
    });

var alkah02 = alkah01.then(
    function (result2) {
        console.log("alkah02, with result: ", result2);
        return "Что-то пусто :(";
    });


var ment = alkah02.then(
    function (result2) {
        console.log("ment , with result: ", result2);
        return "Пакуем :)";
    });


/*
setTimeout(
    function () {
        console.log("JOPA", promiseMagaz, alkah01);
    }, 2000);*/
